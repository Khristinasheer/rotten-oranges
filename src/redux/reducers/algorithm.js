import produce from "immer";
import { AlgorithmActions } from "../actions/algorithmActions";
import { CASE_ONE, CASE_TWO, CASE_THREE } from "../../constants/matrices";

export const initialState = {
  firstScenarioData: CASE_ONE,
  secondScenarioData: CASE_TWO,
  thirdScenarioData: CASE_THREE,
  firstScenarioDay: 0,
  secondScenarioDay: 0,
  thirdScenarioDay: 0,
  firstScenarioCarets: false,
  secondScenarioCarets: false,
  thirdScenarioCarets: false,
  firstScenarioRunning: false,
  secondScenarioRunning: false,
  thirdScenarioRunning: false,
};

const AlgorithmReducer = produce((state = { ...initialState }, action) => {
  switch (action.type) {
    case AlgorithmActions.INFECT_HOMES:
      if (action.scenario === 0) {
        return {
          ...state,
          firstScenarioData: action.grid,
          firstScenarioDay: action.day,
          firstScenarioCarets: action.showCarets,
          firstScenarioRunning: action.isRunning,
        };
      }
      if (action.scenario === 1) {
        return {
          ...state,
          secondScenarioData: action.grid,
          secondScenarioDay: action.day,
          secondScenarioCarets: action.showCarets,
          secondScenarioRunning: action.isRunning,
        };
      }
      if (action.scenario === 2) {
        return {
          ...state,
          thirdScenarioData: action.grid,
          thirdScenarioDay: action.day,
          thirdScenarioCarets: action.showCarets,
          thirdScenarioRunning: action.isRunning,
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
