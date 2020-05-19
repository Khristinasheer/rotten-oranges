import { css } from "styled-components";
import breakpoints from "./breakpoints";

const em = 16;

export const media = {
  up: Object.keys(breakpoints.up).reduce((acc, label) => {
    const emSize = breakpoints.up[label] / em;
    acc[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {}),
  down: Object.keys(breakpoints.down).reduce((acc, label) => {
    const emSize = breakpoints.down[label] / em;
    acc[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {}),
};

export default media;
