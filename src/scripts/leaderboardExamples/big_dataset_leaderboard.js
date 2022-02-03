import { Leaderboard } from "leaderboard-table";
import data from "../../../data/MOCK_DATA.json";

import "leaderboard-table/dist/leaderboard.min.css";

const lbRoot = document.getElementById("leaderboard-root");

const lb = new Leaderboard(lbRoot, data, {
  contentForEmptyCells: "--- No data ---",
});

lb.init();
