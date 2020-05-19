import produce from "immer";
import { AlgorithmActions } from "../actions/algorithmActions";

export const initialState = {
  firstScenarioData: [
    [1, 0, 1, 1, 0, 2],
    [1, 1, 1, 2, 1, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2],
    [2, 0, 1, 0, 1, 0],
  ],
  secondScenarioData: [
    [2, 0, 1, 0, 1, 2],
    [1, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 1, 1],
    [2, 0, 1, 1, 0, 2],
    [1, 0, 0, 0, 1, 0],
    [2, 1, 0, 0, 2, 0],
  ],

  firstScenarioDay: 0,
  secondScenarioDay: 0,
};

const AlgorithmReducer = produce((state = { ...initialState }, action) => {
  switch (action.type) {
    case AlgorithmActions.INFECT_HOMES:
      if (action.scenario === 0) {
        return {
          ...state,
          firstScenarioData: action.grid,
          firstScenarioDay: action.day,
        };
      }
      if (action.scenario === 1) {
        return {
          ...state,
          secondScenarioData: action.grid,
          secondScenarioDay: action.day,
        };
      }
      break;
    default:
  }
  return {
    ...state,
  };
});

export default AlgorithmReducer;
