import Leaderboard from "@patryk.rozwadowski/leaderboard";

const root = document.querySelector(".lb_root_example");

const renderManyRows = (amountOfRows) => {
  for (let i = 0; i < amountOfRows; i++) {
    let randomNum = Math.round(Math.random() * 1000);
    let isRandomKey = randomNum % 2 === 0;
    if (isRandomKey) {
      dataColumns.push({
        name: randomNum,
        points: "H" + randomNum,
        place: randomNum,
        [randomNum]: randomNum,
      });
      continue;
    }

    dataColumns.push({
      name: randomNum,
      points: "H" + randomNum,
      place: randomNum,
    });
  }
};

const dataColumns = [
  // { name: "1", heheader: "1" },
  // { name: "2", wow: "2", heheader: "2", nenee: "2" },
  // { name: "3", wow: "3", heheader: "3", nenee: "3" },
  // { name: "4", wow: "4", heh: "4", nenee: "4" },
  // { name: "5", wow: "5", heheader: "5", nenee: "5" },
  // { name: "6", wow: "6", heheader: "6", nenee: "6", hehehehe: "6" },
];
renderManyRows(10);
// Todo: simply leaderboard to render elements faster

const lb = new Leaderboard({
  rootContainer: root,
  leaderboardData: dataColumns,
  options: {
    headerTags: "h5",
    logs: false,
    contentForEmptyRows: "EMPTY",
    sortByPlaces: true,
  },
});

lb.init();
