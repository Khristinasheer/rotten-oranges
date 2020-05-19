import styled, { keyframes } from "styled-components";
import media from "../../helpers/media";

export const IconGuide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  ${media.down.medium`
    margin: 48px 5px;
    display: grid;
    justify-items: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
  `};
`;

export const FlexDiv = styled.div`
  display: flex;

  ${media.down.medium`
    width: 168px;
  `};

  ${media.down.small`
    width: 178px;
  `};

  ${media.down.xsmall`
    width: 140px;
  `};
`;

export const Header = styled.h2`
  text-align: center;
`;

export const LargerText = styled.p`
  font-size: 20px;
  /* animation: ${keyframes`
       0%,
       60%,
       100% {
         transform: translate3d(0, 0, 0);
       }
       80% {
         transform: translate3d(0, 2px, 0);
       }
       70%,
       90% {
         transform: translate3d(0, 7px, 0);
       }
     `} infinite 2s ease-in-out; */
`;

export const Text = styled.p`
  margin: auto 10px;
`;

export const Box = styled.div`
  display: grid;
  text-align: center;
  column-gap: 10px;
  margin-top: 48px;

  ${media.up.large`
    grid-template-columns: 1fr 1fr;
    margin: 64px 120px;
  `};
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  border-radius: 5px;
  height: 30px;
  width: 129px;
  font-size: 14px;
  background: #d1df7e;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const StyledDiv = styled.div`
  ${media.down.medium`
    margin-bottom: 30px;
  `};
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 10px;
  outline: none;
`;

export const ButtonContainer = styled.div`
  ${media.down.large`
    margin-bottom: 48px;
  `};
`;
