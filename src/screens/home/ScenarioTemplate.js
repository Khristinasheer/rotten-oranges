import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InfectHomes } from "../../redux/actions/algorithmActions";
import {
  StyledUl,
  Button,
  StyledDiv,
  LargerText,
  ButtonContainer,
  ArrowButton,
} from "./Styled";
import {
  HealthyHome,
  ZombieHome,
  EmptyHome,
  InfectedHome,
  ArrowRight,
  ArrowLeft,
} from "../../svg-icons";

const ScenarioTemplate = ({ scenario, text }) => {
  const scenarioKey =
    scenario === 0 ? "firstScenarioData" : "secondScenarioData";
  const scenarioDayKey =
    scenario === 0 ? "firstScenarioDay" : "secondScenarioDay";
  const data = useSelector(
    (state) => state.AlgorithmReducer[scenarioKey],
    () => false
  );
  const day = useSelector((state) => state.AlgorithmReducer[scenarioDayKey]);

  if (scenario === 0) {
    console.log("home", data);
  }

  const dispatch = useDispatch();
  const scenarioItems = data.map((row, index) => {
    return (
      <StyledUl key={index}>
        <li key={`${scenario}-${index}`}>
          {row.map((column, i) => {
            const k = `${scenario}-${index}-${i}`;
            if (column === 2) {
              return <ZombieHome key={k} />;
            } else if (column === 1) {
              return <HealthyHome key={k} />;
            } else if (column === 3) {
              return <InfectedHome key={k} />;
            } else {
              return <EmptyHome key={k} />;
            }
          })}
        </li>
      </StyledUl>
    );
  });

  return (
    <StyledDiv>
      <LargerText>Day: {day}</LargerText>
      <p>{text}</p>
      {scenarioItems}
      <Button onClick={() => dispatch(InfectHomes(scenario))}>
        Play animation
      </Button>

      <ButtonContainer>
        <ArrowButton onClick={() => dispatch(InfectHomes(scenario, day - 1))}>
          <ArrowLeft />
        </ArrowButton>
        <ArrowButton
          onClick={() => {
            console.log("hello", scenario);
            dispatch(InfectHomes(scenario, day + 1));
          }}
        >
          <ArrowRight />
        </ArrowButton>
      </ButtonContainer>
    </StyledDiv>
  );
};

export default ScenarioTemplate;
