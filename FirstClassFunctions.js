// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getGreenTea = (prepareGreenTea, numOfCups) => {
  const greenTeaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const greenTeaCup = prepareGreenTea();
    greenTeaCups.push(greenTeaCup);
  }
  return greenTeaCups;
};

const getBlackTea = (prepareBlackTea, numOfCups) => {
    const blackTeaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const blackTeaCup = prepareBlackTea();
      blackTeaCups.push(blackTeaCup);
    }
    return blackTeaCups;
  };

const tea4GreenTeamFCC = getGreenTea(prepareGreenTea,1);
const tea4BlackTeamFCC = getBlackTea(prepareBlackTea,2);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);