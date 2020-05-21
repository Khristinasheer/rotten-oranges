import { cloneDeep } from "lodash";
import { initialState } from "../reducers/algorithm";

export const AlgorithmActions = {
  INFECT_HOMES: "INFECT_HOMES",
};

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const homeInfection = async (initialGrid, scenario, targetDay, dispatch) => {
  let dataKey = "";
  if (scenario === 0) {
    dataKey = "firstScenarioData";
  } else if (scenario === 1) {
    dataKey = "secondScenarioData";
  } else {
    dataKey = "thirdScenarioData";
  }

  const grid = cloneDeep(initialState[dataKey]);
  let showCarets = false;
  let day = 0;

  if (targetDay === 0) {
    dispatch({
      type: AlgorithmActions.INFECT_HOMES,
      scenario,
      showCarets,
      grid,
      day,
    });
    return 0;
  }

  let healthyHomes = 0;
  let zombieHomes = [];
  let infectedHomes = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) healthyHomes++;
      if (grid[i][j] === 2) zombieHomes.push([i, j]);
      if (grid[i][j] === 3) infectedHomes.push([i, j]);
    }
  }

  const direction = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  while (healthyHomes && zombieHomes.length) {
    let infectionProgress = [];
    while (zombieHomes.length) {
      let [x, y] = zombieHomes.pop();

      infectedHomes.forEach(([x, y]) => {
        grid[x][y] = 2;
      });

      for (let i = 0; i < 4; i++) {
        let [x2, y2] = [x + direction[i][0], y + direction[i][1]];
        if (grid[x2] && grid[x2][y2] === 1) {
          grid[x2][y2] = 3;
          infectedHomes.push([x2, y2]);
          healthyHomes--;
          infectionProgress.push([x2, y2]);
        }
      }
    }
    zombieHomes = infectionProgress;
    day++;

    if (targetDay === day) {
      dispatch({
        type: AlgorithmActions.INFECT_HOMES,
        scenario,
        showCarets,
        grid,
        day,
      });
      break;
    }
    if (targetDay === null) {
      dispatch({
        type: AlgorithmActions.INFECT_HOMES,
        scenario,
        isRunning: true,
        showCarets,
        grid,
        day,
      });
      await sleep(1000);
    }
  }

  if (scenario === 2 && healthyHomes && targetDay === null) {
    let curedArray = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2) {
          grid[i][j] = 1;
          healthyHomes++;
          curedArray.push([i][j]);
        }
      }
      zombieHomes = curedArray;
    }
    dispatch({
      type: AlgorithmActions.INFECT_HOMES,
      scenario,
      showCarets: true,
      grid,
      day,
    });
  } else {
    dispatch({
      type: AlgorithmActions.INFECT_HOMES,
      scenario,
      showCarets: true,
      grid,
      day,
    });
  }

  return day;
};

export const InfectHomes = (scenario, day = null) => (dispatch, getState) => {
  const grid =
    scenario === 0
      ? getState().AlgorithmReducer.firstScenarioData
      : getState().AlgorithmReducer.secondScenarioData;

  homeInfection(grid, scenario, day, dispatch);
};
