import css from "styled-components";
import { string } from "prop-types";

import { breakpoint, setSpace } from "../../../utils";

const satelliteBase = `
  position: absolute;
`;

const Actionbar = css.div`
  ${({ limit }) =>
    limit
      ? `
      max-width: 280px;
      ${breakpoint.tablet} {
        max-width: 300px;
      }
  `
      : `
    ${setSpace("phl")};
  `};
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: 40px;
  position: relative;
  & > * {
    ${setSpace("mhx")};
  }
  & > *:first-child {
    ${({ limit, satellite }) =>
      satellite === "both" || satellite === "left"
        ? `
      ${satelliteBase};
      ${
        limit
          ? `
        right: 100%;
      `
          : `
        left: 0;
      `
      };
    `
        : ``}
  }
  & > *:last-child {
    ${({ limit, satellite }) =>
      satellite === "both" || satellite === "right"
        ? `
      ${satelliteBase};
      ${
        limit
          ? `
        left: 100%;
      `
          : `
        right: 0;
      `
      };
    `
        : ``}
  }
`;

Actionbar.propTypes = {
  satellite: string
};

Actionbar.defaultProps = {
  satellite: null
};

export default Actionbar;
