import { Leaderboard } from "leaderboard-table";
import "leaderboard-table/dist/leaderboard.min.css";

const lbRootExampleBasic = document.querySelector(".lb_root_example_basic");

const dataColumns = [
  {
    name: "Peter",
    score: 20,
  },
  {
    name: "Bob",
    score: 50,
  },
];

if (!lbRootExampleBasic) {
  console.log(lbRootExampleBasic.name + "Not found");
}

const lb = new Leaderboard(lbRootExampleBasic, dataColumns);

export default lb;
