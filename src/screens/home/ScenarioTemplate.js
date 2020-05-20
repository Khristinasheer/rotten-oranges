import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { InfectHomes } from "../../redux/actions/algorithmActions";
import {
  StyledUl,
  Button,
  StyledDiv,
  Header2,
  Text,
  ButtonContainer,
  ArrowButton,
  StyledSpan,
} from "./Styled";
import {
  HealthyHome,
  ZombieHome,
  EmptyHome,
  InfectedHome,
  ArrowRight,
  ArrowLeft,
} from "../../svg-icons";

const ScenarioTemplate = ({ scenario, text, title }) => {
  let scenarioKey = "";
  let scenarioDayKey = "";
  let scenarioCarets = "";
  if (scenario === 0) {
    scenarioKey = "firstScenarioData";
    scenarioDayKey = "firstScenarioDay";
    scenarioCarets = "firstScenarioCarets";
  } else if (scenario === 1) {
    scenarioKey = "secondScenarioData";
    scenarioDayKey = "secondScenarioDay";
    scenarioCarets = "secondScenarioCarets";
  } else {
    scenarioKey = "thirdScenarioData";
    scenarioDayKey = "thirdScenarioDay";
    scenarioCarets = "thirdScenarioCarets";
  }

  const data = useSelector(
    (state) => state.AlgorithmReducer[scenarioKey],
    () => false
  );
  const day = useSelector((state) => state.AlgorithmReducer[scenarioDayKey]);
  const showCarets = useSelector(
    (state) => state.AlgorithmReducer[scenarioCarets]
  );

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
      <Header2>{title}</Header2>
      <Text>
        {text}
        <StyledSpan>Day: {day}</StyledSpan>
      </Text>
      {scenarioItems}

      <div>
        <Button
          onClick={() => {
            dispatch(InfectHomes(scenario));
          }}
        >
          Play animation
        </Button>
        {showCarets && (
          <ButtonContainer>
            <ArrowButton
              onClick={() => dispatch(InfectHomes(scenario, day - 1))}
            >
              <ArrowLeft />
            </ArrowButton>
            <ArrowButton
              onClick={() => {
                dispatch(InfectHomes(scenario, day + 1));
              }}
            >
              <ArrowRight />
            </ArrowButton>
          </ButtonContainer>
        )}
      </div>
    </StyledDiv>
  );
};

export default ScenarioTemplate;
