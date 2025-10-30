const NUMBER_OF_DICE = 5;

const SCORE_BY_OCCURRENCES = { 3: 28, 4: 35, 5: 50 };

function computeTotalScoreOf(setOfthrows) {
    
    const histogram = {};

    for (let index = 0; index < NUMBER_OF_DICE; index++) {
        const diceValue = setOfthrows[index];
        histogram[diceValue] = (histogram[diceValue] || 0) + 1;
    }

    const maxOccurrences = Math.max(...Object.values(histogram));

    const sumOfDice = setOfthrows.reduce((accumulator, currentValue) => accumulator + diceValue, 0);

    return SCORE_BY_OCCURRENCES[maxOccurrences] ?? sumOfDice;
}

export { computeTotalScoreOf };
