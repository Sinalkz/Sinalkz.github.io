// Light/dark toggle. Without a saved choice the page follows the system setting.
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function current() {
    var saved = root.getAttribute("data-theme");
    if (saved === "light" || saved === "dark") return saved;
    return systemDark.matches ? "dark" : "light";
  }

  function updateLabel() {
    var next = current() === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", "Switch to " + next + " mode");
  }

  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    updateLabel();
  });

  if (systemDark.addEventListener) systemDark.addEventListener("change", updateLabel);
  updateLabel();
})();
