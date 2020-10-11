/*
 * 0 - maxRandNumber or shuffle array
 *
 * Data parameter is an object:
 *   @param     arr               [arr]     [Array of game items],
 *   @param     maxRandNumber     [num]     [maximum number od random numbers],
 *   @return array || number
 * */

const getRandomNumber = (arr = [], maxRandNumber = 3) => {
  if (typeof arr === 'number') {
    maxRandNumber = arr;
  };

  if (!arr.length) {
    return Math.floor(Math.random() * maxRandNumber);
  };

  return arr.sort(() => Math.random() - 0.5);
};

/*
 * Accumulate number of wins or lose games
 *
 * Data parameter is an object:
 *   @param     arr           [arr]     [Array of game items],
 *   @param     pickedDoorId  [num]     [id from picked door],
 *   @param     data          [obj]     [data object containing game data],
 *   @return obj
 * */
const accumulateGameOutcome = (arr, pickedDoorId, data) => {
  if (arr.find((door) => door.id === pickedDoorId && door.name === 'car')) {
    data.win += 1;
  } else {
    data.lose += 1;
  };

  return data;
};

module.exports = {
  getRandomNumber,
  accumulateGameOutcome,
};
