/**
 * The service, the roster, and the arithmetic the board runs on.
 *
 * Everything here traces to the inventory in roots.md. Nothing is invented:
 * the five stations, the 48-hour deadline, the forecast covers and the 14-day
 * horizon are the brief's; the names are generic first names, as instructed;
 * the rates and hours are placeholder operating data, which is what the labour
 * figure is computed FROM rather than a claim the product makes.
 */

export type StationId = "larder" | "grill" | "sauce" | "pass" | "pastry";

/**
 * The three states a placement can be in. There is no fourth: a cook is on a
 * station or on the bench, and "on the bench" is the absence of a station
 * rather than a state of its own.
 */
export type PlacementState = "confirmed" | "awaiting" | "declined";

export type Station = {
  id: StationId;
  /** Headcount this station needs for this service. */
  needs: number;
  /** Hours a cook works when placed here. Pastry starts and finishes earlier
   *  than the line, which is why moving a cook between stations moves the
   *  labour figure by more than the difference in their rate. */
  hours: number;
};

export type Cook = {
  id: string;
  name: string;
  /** £ per hour. */
  rate: number;
  /** The stations this cook is signed off for. The placement rule gates on
   *  exactly this list — see `isEligible`. */
  signedOff: StationId[];
};

export type Placement = {
  cookId: string;
  /** null = off board. */
  station: StationId | null;
  /** Meaningless while `station` is null — nobody has been asked. The board
   *  does not render it there, and `labour` and `covered` both skip it. */
  state: PlacementState;
};

/** Root 1: exactly five stations, in the order they sit on the line. */
export const STATIONS: Station[] = [
  { id: "larder", needs: 2, hours: 8 },
  { id: "grill", needs: 2, hours: 8 },
  { id: "sauce", needs: 2, hours: 8 },
  { id: "pass", needs: 1, hours: 8 },
  { id: "pastry", needs: 1, hours: 6.5 },
];

export const ROSTER: Cook[] = [
  { id: "ade", name: "Ade", rate: 14.75, signedOff: ["larder", "pastry"] },
  { id: "priya", name: "Priya", rate: 16.2, signedOff: ["larder", "sauce", "pass"] },
  { id: "tom", name: "Tom", rate: 15.5, signedOff: ["grill", "sauce"] },
  { id: "marek", name: "Marek", rate: 13.9, signedOff: ["grill", "larder"] },
  { id: "joss", name: "Joss", rate: 18.4, signedOff: ["sauce", "pass", "grill"] },
  { id: "ruth", name: "Ruth", rate: 14.25, signedOff: ["sauce", "larder"] },
  { id: "danny", name: "Danny", rate: 17.1, signedOff: ["pass", "sauce", "grill"] },
  { id: "nadia", name: "Nadia", rate: 15.8, signedOff: ["pastry", "larder"] },
  { id: "sam", name: "Sam", rate: 13.5, signedOff: ["sauce", "larder", "grill"] },
  { id: "kelis", name: "Kelis", rate: 12.95, signedOff: ["pastry", "larder"] },
];

/**
 * The opening board. Eight of the roster are placed and two are off board,
 * which sits inside the brief's 4-to-9 cooks for a typical service.
 *
 * Ruth has declined on sauce and is still sitting on it. A decline the board
 * hides is a gap nobody sees, so she stays there struck through and sauce
 * reads short until the chef moves someone in.
 */
export const OPENING_BOARD: Placement[] = [
  { cookId: "ade", station: "larder", state: "confirmed" },
  { cookId: "priya", station: "larder", state: "confirmed" },
  { cookId: "tom", station: "grill", state: "confirmed" },
  { cookId: "marek", station: "grill", state: "awaiting" },
  { cookId: "joss", station: "sauce", state: "confirmed" },
  { cookId: "ruth", station: "sauce", state: "declined" },
  { cookId: "danny", station: "pass", state: "confirmed" },
  { cookId: "nadia", station: "pastry", state: "awaiting" },
  { cookId: "sam", station: null, state: "awaiting" },
  { cookId: "kelis", station: null, state: "awaiting" },
];

/**
 * Fixed rather than read from the clock, so the screen renders the same board
 * every time. A live build reads `Date.now()` here and nothing else changes.
 *
 * Service is 19 Aug 18:00. Confirmations are due 48 hours before service, so
 * calls close 17 Aug 18:00. "Now" is 17 Aug 09:00, which is the 9 hours the
 * rail counts down.
 */
export const SERVICE = {
  name: "Dinner",
  day: "Wed 19 Aug",
  startsAt: "18:00",
  /** Root 1: the board shows labour against the service's forecast covers. */
  forecastCovers: 120,
  /** Root 1: confirmations are due 48 hours before service. */
  callsCloseInHours: 9,
} as const;

/** Root 1: rotas do not run beyond 14 days out. */
export const HORIZON_DAYS = 14;

const cooksById = new Map(ROSTER.map((c) => [c.id, c]));

export function cook(id: string): Cook {
  const found = cooksById.get(id);
  if (!found) throw new Error(`No cook ${id}`);
  return found;
}

export function station(id: StationId): Station {
  const found = STATIONS.find((s) => s.id === id);
  if (!found) throw new Error(`No station ${id}`);
  return found;
}

/** The whole placement rule, in one place: Mise will not put a cook on a
 *  station they are not signed off for. */
export function isEligible(cookId: string, target: StationId | null): boolean {
  if (target === null) return true; // the bench takes anyone
  return cook(cookId).signedOff.includes(target);
}

export function placementsOn(board: Placement[], id: StationId | null): Placement[] {
  return board.filter((p) => p.station === id);
}

/** A decline does not fill a slot. Awaiting does — the call is out and the
 *  slot is held until they say no. */
export function covered(board: Placement[], id: StationId): number {
  return placementsOn(board, id).filter((p) => p.state !== "declined").length;
}

export function shortBy(board: Placement[], id: StationId): number {
  return Math.max(0, station(id).needs - covered(board, id));
}

/** Labour counts everyone holding a slot, at the hours of the station they
 *  hold. Declines and the bench cost nothing. */
export function labour(board: Placement[]): number {
  return board.reduce((total, p) => {
    if (p.station === null || p.state === "declined") return total;
    return total + cook(p.cookId).rate * station(p.station).hours;
  }, 0);
}

export function shortStations(board: Placement[]): StationId[] {
  return STATIONS.filter((s) => shortBy(board, s.id) > 0).map((s) => s.id);
}

export function awaitingCount(board: Placement[]): number {
  return board.filter((p) => p.station !== null && p.state === "awaiting").length;
}

export function onCount(board: Placement[]): number {
  return board.filter((p) => p.station !== null && p.state !== "declined").length;
}

/**
 * Moving a cook to a different station resets them to awaiting.
 *
 * INFERRED, not in the brief. The message the cook confirmed named a station;
 * a chef who moves them to a different one has not got that confirmation. The
 * alternative — carrying the confirmation across — would let a board show
 * every cook confirmed for stations none of them agreed to, which is the worse
 * failure. Flagged in roots.md as needing an answer.
 */
export function move(board: Placement[], cookId: string, to: StationId | null): Placement[] {
  return board.map((p) => {
    if (p.cookId !== cookId) return p;
    if (p.station === to) return p;
    return { ...p, station: to, state: "awaiting" };
  });
}

const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const money = (n: number) => gbp.format(n);
