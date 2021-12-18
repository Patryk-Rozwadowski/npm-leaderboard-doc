const renderManyRows = (dataArray, amountOfRows) => {
    for (let i = 0; i < amountOfRows; i++) {
        let randomNum = Math.round(Math.random() * 1000);
        let isRandomKey = randomNum % 2 === 0;
        if (isRandomKey) {
            dataArray.push({
                points: "H" + randomNum,
                place: randomNum,
                [randomNum]: randomNum,
            });
            continue;
        }

        dataArray.push({
            name: randomNum,
            points: "H" + randomNum,
            place: randomNum,
        });
    }
};

export {renderManyRows}