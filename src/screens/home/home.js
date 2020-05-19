import React from "react";
import { Header, IconGuide, Text, Box, FlexDiv } from "./Styled";
import {
  HealthyHome,
  ZombieHome,
  EmptyHome,
  InfectedHome,
} from "../../svg-icons";
import ScenarioTemplate from "./ScenarioTemplate";

const Home = () => {
  return (
    <>
      <Header>Zombies</Header>
      <IconGuide>
        <FlexDiv>
          <EmptyHome width="40" />
          <Text>Empty Home</Text>
        </FlexDiv>
        <FlexDiv>
          <HealthyHome width="40" />
          <Text>Healthy Home</Text>
        </FlexDiv>
        <FlexDiv>
          <ZombieHome width="40" />
          <Text>Zombie Home</Text>
        </FlexDiv>
        <FlexDiv>
          <InfectedHome width="40" />
          <Text>Infected Home</Text>
        </FlexDiv>
      </IconGuide>

      <Box>
        <ScenarioTemplate
          text="A case where all can be infected"
          scenario={0}
        />
        <ScenarioTemplate
          text="A case with effective social distancing"
          scenario={1}
        />
      </Box>
    </>
  );
};

export default Home;
