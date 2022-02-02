import { Leaderboard } from "leaderboard-table";
import { dataColumnsSimple } from "../common/data";

const lbRootExampleBasic = document.querySelector(".lb_root_example_basic");

const lbSimple = new Leaderboard(lbRootExampleBasic, dataColumnsSimple, {
  contentForEmptyCells: "EMPTY",
});
export { lbSimple };
