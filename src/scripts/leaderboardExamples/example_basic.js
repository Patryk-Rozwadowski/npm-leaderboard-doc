import Leaderboard from "@patryk.rozwadowski/leaderboard";

const lbRootExampleBasic = document.querySelector(".lb_root_example_basic");

const dataColumns = [
    {
        name: "Peter", score: 20
    },
    {
        name: "Bob", score: 50
    }
];

if (!lbRootExampleBasic) {
    console.log(lbRootExampleBasic.name + "Not found")
}

const lb = new Leaderboard({
    rootContainer: lbRootExampleBasic,
    leaderboardData: dataColumns,
    options: {
        sortByPlaces: true
    }
});

export default lb;