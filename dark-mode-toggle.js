const log = (msg) => {
  if (true) { console.log(msg); }
};

const dark = "dark";
const light = "light";
const darkClass = "dark-mode";
const lightClass = "light-mode";
const themeStorageKey = "theme";
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem(themeStorageKey);
if (currentTheme == dark) {
  log("Stored dark");
  document.querySelector(":root").classList.add(darkClass);
} else if (currentTheme == light) {
  log("Stored light");
  document.querySelector(":root").classList.add(lightClass);
} else if (prefersDarkScheme) {
  log("Prefers dark");
  document.querySelector(":root").classList.add(darkClass);
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener(
    "click",
    () => {
      const root = document.querySelector(":root")
      if (root.classList.contains(darkClass)) {
        root.classList.remove(darkClass);
        root.classList.add(lightClass);
      } else if (root.classList.contains(lightClass)) {
        root.classList.remove(lightClass);
        root.classList.add(darkClass);
      }

      const theme = root.classList.contains(darkClass) ? dark : light

      localStorage.setItem(themeStorageKey, theme);
      log("Store " + theme);
    }
  );
