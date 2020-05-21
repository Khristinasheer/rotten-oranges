import React, { memo } from "react";
import { Header, IconGuide, IconText, Box } from "./Styled";
import {
  HealthyHome,
  ZombieHome,
  EmptyHome,
  InfectedHome,
} from "../../svg-icons";
import ScenarioTemplate from "./ScenarioTemplate";

const Home = () => {
  const iconData = [
    {
      src: <EmptyHome width="40" />,
      text: "Empty Home",
    },
    {
      src: <HealthyHome width="40" />,
      text: "Healthy Home",
    },
    {
      src: <ZombieHome width="40" />,
      text: "Zombie Home",
    },
    {
      src: <InfectedHome width="40" />,
      text: "Infected Home",
    },
  ];

  let scenarioRank = [
    {
      scenario: 0,
      title: "Case 1",
      text: "All can become infected.",
    },
    {
      scenario: 1,
      title: "Case 2",
      text: "All can become infected.",
    },
    {
      scenario: 2,
      title: "Case 3",
      text: "With effective social distancing, not all will be infected.",
    },
  ];
  return (
    <>
      <Header>Zombies</Header>
      <IconGuide>
        {iconData.map((icon) => {
          return (
            <li key={icon.text}>
              {icon.src}
              <IconText>{icon.text}</IconText>
            </li>
          );
        })}
      </IconGuide>

      <Box>
        {scenarioRank.map((i) => (
          <ScenarioTemplate
            key={i.scenario}
            scenario={i.scenario}
            text={i.text}
            title={i.title}
          />
        ))}
      </Box>
    </>
  );
};

export default memo(Home);
