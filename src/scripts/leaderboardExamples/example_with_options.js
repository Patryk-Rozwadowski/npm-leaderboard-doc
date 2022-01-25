import { Leaderboard } from "leaderboard-table";
import { dataColumnsSimple } from "../common/data";

const lbRootExampleBasic = document.querySelector(
  ".lb_root_example_with_options"
);

const lbWithOptions = new Leaderboard(lbRootExampleBasic, dataColumnsSimple);
export { lbWithOptions };
