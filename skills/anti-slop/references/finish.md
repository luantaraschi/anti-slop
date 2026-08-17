# Finish

The cheapest axis, and the most honest. Nothing here proves a model wrote the
code. It proves nobody came back to it before shipping. Run this axis first:
it is objective, it is nearly all greppable, and it sets the floor the other
two axes are read against.

### F1 — No lang attribute

**Signal**  The `<html>` element has no `lang` attribute. In Next.js this is `app/layout.tsx`; in Vite it's `index.html`.

**Principle**  A screen reader picks its voice from this attribute. Without it, text in Portuguese gets read with English phonemes.

**Fix**  Declare `lang` on the root element, and again on any element where the language changes.

**Not slop when**  Never. There is no page without a language.

### F2 — A title nobody revisited

**Signal**  Every route shares the same `<title>`, or the title is still the framework template's: "Vite + React", "Create Next App", "React App".

**Principle**  The title is the label on the tab, the history entry, and the search result. Repeated across routes, it distinguishes nothing. Left as the scaffold shipped it, it names the toolchain instead of the product.

**Fix**  Give each route its own title, specific first and generic last: `Invoices — Acme`. On a one-screen app, one title is enough, as long as somebody wrote it.

**Not slop when**  Only one real route exists and its single title is the product's own. A surviving framework default is never exempt. A one-screen app still puts its name in the tab.

### F3 — No meta description

**Signal**  There is no meta description at all, or it's still the framework's default.

**Principle**  Without a description, the search engine cuts an arbitrary excerpt from the page to show instead.

**Fix**  Write one description per indexable route, 120 to 160 characters, aimed at the person deciding whether to click.

**Not slop when**  The route is internal, or sits behind authentication, and never reaches any index. F4 and F10 already release an internal app in as many words; this clause was narrower than both for no reason, so an internal tool with no visible auth layer took a finding it could not act on.

### F4 — No Open Graph tags

**Signal**  `og:title`, `og:description`, and `og:image` are missing.

**Principle**  Every link pasted into a chat becomes a card. Without these tags, the card is just the bare domain.

**Fix**  Add `og:title`, `og:description`, and a 1200×630 `og:image` for every shareable route.

**Not slop when**  The app is internal and its links never leave the organization.

### F5 — Framework favicon

**Signal**  The favicon is still Vite's or Next's default `favicon.ico`, byte for byte, or there's no favicon at all.

**Principle**  The favicon is the product's identity compressed into 16 pixels on the user's tab.

**Fix**  Ship a real icon, plus an `apple-touch-icon` and an `icon` entry in the manifest.

**Not slop when**  The build is a declared prototype that will never be published.

### F6 — Missing or repeated h1

**Signal**  The route has no `<h1>` at all, or it has more than one.

**Principle**  The h1 names the page. None means nothing is named; several means they're competing for the name.

**Fix**  Use exactly one h1 per route, matching the subject of its `<title>`.

**Not slop when**  Never. If two things are competing for the h1, the page is doing two things and needs to be split.

### F7 — Missing alt text

**Signal**  A content `<img>` has no `alt`. A decorative image needs an explicit `alt=""`, not the attribute's absence.

**Principle**  Without `alt`, a screen reader reads the filename instead of the content.

**Fix**  Write `alt` text that describes what the image communicates in that context, not a literal description of what it depicts.

**Not slop when**  A deliberate `alt=""` is already in place and the image is purely decorative.

### F8 — No custom 404

**Signal**  There's no `app/not-found.tsx` in Next.js, no catch-all route in the router, and nothing configured at the host level.

**Principle**  The 404 is where anyone following a stale link ends up. The framework default is a wall.

**Fix**  Build an error route that offers search and the most likely destinations.

**Not slop when**  The application has no routing at all and is served from a single path.

### F9 — No canonical

**Signal**  The site has multiple routes and no `<link rel="canonical">` anywhere.

**Principle**  Without a canonical tag, `/page`, `/page/`, and `/page?ref=x` become three separate pages to the index.

**Fix**  Add an absolute canonical URL to every indexable route.

**Not slop when**  The site sits behind authentication, or has only a single route.

### F10 — No sitemap or robots

**Signal**  A public site ships with no `sitemap.xml` and no `robots.txt`.

**Principle**  Crawlers discover pages by following links. A sitemap is the map that keeps a page from going undiscovered.

**Fix**  Generate both at build time. Every modern framework has a ready-made route for this.

**Not slop when**  The app is internal, or the site has fewer than ten pages, all reachable from navigation.

### F11 — Array render without key

**Signal**  A `.map(` call produces JSX elements with no `key` prop, or with `key={index}` on a list that reorders.

**Principle**  Without a stable key, React remounts elements that should have just moved, and input state jumps to the wrong row.

**Fix**  Key on the data's own identifier. Index is only safe on a list that is truly immutable.

**Not slop when**  The list is genuinely immutable — never reordered, never filtered.

### F12 — Surviving placeholder

**Signal**  "Lorem ipsum", "Your Company", "John Doe", `example.com`, `href="#"`, `TODO`, or "Coming soon" appears on a published route.

**Principle**  A published placeholder is the cheapest proof that nobody read the page again before shipping it.

**Fix**  Replace it with real content, or remove the section. An empty section beats one filled with a lie.

**Not slop when**  It's in a test fixture, a Storybook story, or documentation showing the pattern on purpose.
