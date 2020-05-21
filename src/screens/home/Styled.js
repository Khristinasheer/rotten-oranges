import styled from "styled-components";
import media from "../../helpers/media";

export const IconGuide = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  padding-left: 0;
  justify-content: center;

  li {
    width: 80px;
  }
`;

export const Header = styled.h1`
  text-align: center;
`;

export const Header2 = styled.h2`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 17px;
`;

export const IconText = styled.p`
  margin: 5px 10px;
  font-size: 15px;
`;

export const Box = styled.div`
  display: grid;
  text-align: center;
  column-gap: 10px;
  margin-top: 32px;

  ${media.up.large`
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 30px;
    margin-right: 30px;
  `};
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin: 5px 0;
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
  padding-bottom: 27px;
  padding-top: 10px;
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
  margin-bottom: 48px;
`;

export const StyledSpan = styled.span`
  border-bottom: 2px solid #d1df7e;
  padding-bottom: 2px;
  margin-left: 10px;
`;
