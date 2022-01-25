import { lbSimple } from "./scripts/leaderboardExamples/example_basic";
import { lbWithOptions } from "./scripts/leaderboardExamples/example_with_options";
import "leaderboard-table/dist/leaderboard.min.css";

const copyNpm = {
  text: document.getElementById("npm-install"),
  button: document.getElementById("copy-npm"),
};

const copyYarn = {
  text: document.getElementById("yarn-install"),
  button: document.getElementById("copy-yarn"),
};

const copyCdnJs = {
  text: document.getElementById("cdn-install-js"),
  button: document.getElementById("copy-cdn-js"),
};

const copyCdnCss = {
  text: document.getElementById("cdn-install-css"),
  button: document.getElementById("copy-cdn-css"),
};

const installationCopy = [copyNpm, copyYarn, copyCdnJs, copyCdnCss];

installationCopy.forEach((copyElement) =>
  copyElement.button.addEventListener("click", () => {
    window.navigator.clipboard.writeText(copyElement.text.textContent);
  })
);

lbSimple.init();
lbWithOptions.init();
