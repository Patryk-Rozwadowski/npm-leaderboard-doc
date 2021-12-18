import example_basic from "./scripts/leaderboardExamples/example_basic";

const copyNpm = {
    text: document.getElementById("npm-install"),
    button: document.getElementById("copy-npm")
};

const copyYarn = {
    text: document.getElementById("yarn-install"),
    button: document.getElementById("copy-yarn")
};

const copyCdn = {
    text: document.getElementById("cdn-install"),
    button: document.getElementById("copy-cdn")
};


const installationCopy = [
    copyNpm,
    copyYarn,
    copyCdn
]

installationCopy.forEach(copyElement => copyElement.button.addEventListener("click", () => {
    window.navigator.clipboard.writeText(copyElement.text.textContent);
}))

example_basic.init()



