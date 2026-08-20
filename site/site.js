const comparisonControls = document.querySelector(".comparison-controls");
const comparisonButtons = [...document.querySelectorAll("[data-comparison]")];
const comparisonSets = [...document.querySelectorAll("[data-comparison-set]")];
const comparisonStatus = document.querySelector("#comparison-status");

function comparisonFromHash() {
  const prefix = "#example=";
  if (!location.hash.startsWith(prefix)) return "merge-odds";
  const value = decodeURIComponent(location.hash.slice(prefix.length));
  return comparisonSets.some((set) => set.dataset.comparisonSet === value)
    ? value
    : "merge-odds";
}

function showComparison(name, updateUrl = true) {
  comparisonSets.forEach((set) => {
    set.hidden = set.dataset.comparisonSet !== name;
  });
  comparisonButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.comparison === name));
  });
  const label = name === "merge-odds" ? "Merge Odds" : "lull";
  comparisonStatus.textContent = `Showing the ${label} comparison`;
  if (updateUrl && comparisonFromHash() !== name) {
    history.pushState(null, "", `#example=${encodeURIComponent(name)}`);
  }
}

if (comparisonControls && comparisonButtons.length && comparisonSets.length) {
  comparisonControls.classList.add("is-enhanced");
  showComparison(comparisonFromHash(), false);
  comparisonButtons.forEach((button) => {
    button.addEventListener("click", () => showComparison(button.dataset.comparison));
  });
  window.addEventListener("popstate", () => showComparison(comparisonFromHash(), false));
  window.addEventListener("hashchange", () => showComparison(comparisonFromHash(), false));
}

const copyStatus = document.querySelector("#copy-status");
document.querySelectorAll("[data-copy]").forEach((button) => {
  button.classList.add("is-enhanced");
  button.addEventListener("click", async () => {
    const idleLabel = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = "Copied";
      copyStatus.textContent = "Installation commands copied";
    } catch {
      button.textContent = "Select text";
      copyStatus.textContent = "Clipboard access failed. Select the commands instead.";
    }
    window.setTimeout(() => {
      button.textContent = idleLabel;
    }, 1800);
  });
});
