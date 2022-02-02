import { Leaderboard } from "leaderboard-table";
import { dataColumnsWithNoContent } from "../common/data";

const lbRootExampleBasic = document.querySelector(
  ".lb_root_example_with_options"
);

const lbWithOptions = new Leaderboard(
  lbRootExampleBasic,
  dataColumnsWithNoContent,
  {
    logs: true,
    sortByPlaces: true,
    contentForEmptyCells: "EMPTY",
  }
);
export { lbWithOptions };
