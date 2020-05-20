import React from "react";
import { Header, IconGuide, Text, Box } from "./Styled";
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
  return (
    <>
      <Header>Zombies</Header>
      <IconGuide>
        {iconData.map((icon) => {
          return (
            <li key={icon.text}>
              {icon.src}
              <Text>{icon.text}</Text>
            </li>
          );
        })}
      </IconGuide>

      <Box>
        <ScenarioTemplate
          text="A case where all can be infected"
          scenario={0}
        />
        <ScenarioTemplate
          text="A case with effective social distancing"
          description="In the end, all infected homes are cured"
          scenario={1}
        />
      </Box>
    </>
  );
};

export default Home;
