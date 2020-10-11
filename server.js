const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9999;
const bodyParser = require('body-parser');
const gameItems = require('./gameItems.json');
const { getRandomNumber, accumulateGameOutcome } = require('./src/util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/build')));

app.post('/api/startgame', (req, res) => {
  const {body: { radio = '', combinations = '' }} = req;

  const errorObj = {
    error: true,
    messages: [],
  };

  if (!radio) {
    console.log(`Error: ${errorObj.messages.join('\n')}`);
    errorObj.messages.push('Please select option for changing doors');
  };

  if (!combinations || Number(combinations) <= 0) {
    console.log(`Error: ${errorObj.messages.join('\n')}`);
    errorObj.messages.push('Please add number of combinations that is not 0');
  };

  if (errorObj.messages.length) {
    console.log(`Error: ${errorObj.messages.join('\n')}`);
    return res.status(404).json(errorObj);
  };

  const data = {
    numberOfGames: combinations,
    withChanging: radio === 'changeyes',
    win: 0,
    lose: 0,
  };

  for (let i = 0; i < Number(combinations); i++) {
    // shuffle the doors
    const shuffleDoors = getRandomNumber(gameItems);
    // pick a door
    const pickedDoorId = shuffleDoors[getRandomNumber()].id;
    // remove one door that doesn't have a car behind it and it's not my pick
    const findDoorToRemoveIdx = shuffleDoors.findIndex(
      (door) => door.name !== 'car' && door.id !== pickedDoorId,
    );
    // copy shuffleDoors
    const shuffleDoorsCopy = shuffleDoors.slice();
    shuffleDoorsCopy.splice(findDoorToRemoveIdx, 1);
    // new doors setup containing our picked door and the one with the car
    const newDoorsSetup = shuffleDoorsCopy;

    if (radio === 'changeno') {
      accumulateGameOutcome(shuffleDoorsCopy, pickedDoorId, data);
    };

    if (radio === 'changeyes') {
      // choose other door
      const newPickedDoorId =
        newDoorsSetup[
          newDoorsSetup.findIndex((door) => door.id !== pickedDoorId)
        ].id;

      accumulateGameOutcome(newDoorsSetup, newPickedDoorId, data);
    };
  };

  return res.status(200).json({
    success: true,
    messages: [
      `Succes !! It's done ! See results for ${combinations} combinations, and ${
        radio === 'changeyes' ? 'with changing doors' : 'without changing doors'
      }`,
    ],
    data,
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
