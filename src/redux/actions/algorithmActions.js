import { cloneDeep } from "lodash";
import { initialState } from "../reducers/algorithm";

export const AlgorithmActions = {
  INFECT_HOMES: "INFECT_HOMES",
};

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const homeInfection = async (initialGrid, scenario, targetDay, dispatch) => {
  const dataKey = scenario === 0 ? "firstScenarioData" : "secondScenarioData";
  const grid = cloneDeep(initialState[dataKey]);
  // console.log("targetDay", targetDay);
  // console.log("grid", grid);
  if (targetDay === 0) {
    dispatch({
      type: AlgorithmActions.INFECT_HOMES,
      scenario,
      grid,
      day: 0,
    });
    return 0;
  }

  let day = 0;
  let healthyHouses = 0;
  let zombieHomes = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) healthyHouses++;
      if (grid[i][j] === 2) zombieHomes.push([i, j]);
    }
  }

  //debugger;
  const direction = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  // console.log("healrthy houses/zombie homes", healthyHouses, zombieHomes);
  while (healthyHouses && zombieHomes.length) {
    let infectionProgress = [];
    while (zombieHomes.length) {
      let [x, y] = zombieHomes.pop();
      for (let i = 0; i < 4; i++) {
        let [x2, y2] = [x + direction[i][0], y + direction[i][1]];
        if (grid[x2] && grid[x2][y2] === 1) {
          grid[x2][y2] = 2;
          healthyHouses--;
          infectionProgress.push([x2, y2]);
        }
      }
    }

    zombieHomes = infectionProgress;
    day++;
    // console.log("day", day);
    if (targetDay === day) {
      dispatch({
        type: AlgorithmActions.INFECT_HOMES,
        scenario,
        grid,
        day,
      });
      break;
    }
    if (targetDay === null) {
      dispatch({
        type: AlgorithmActions.INFECT_HOMES,
        scenario,
        grid,
        day,
      });
      await sleep(1000);
    }
  }

  // fix steps back < >
  if (scenario == 1 && healthyHouses) {
    let newArray = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2) {
          grid[i][j] = 1;
          healthyHouses++;
          newArray.push([i][j]);
          console.log("grid", grid);
        }
      }
      zombieHomes = newArray;
    }
    dispatch({
      type: AlgorithmActions.INFECT_HOMES,
      scenario,
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
