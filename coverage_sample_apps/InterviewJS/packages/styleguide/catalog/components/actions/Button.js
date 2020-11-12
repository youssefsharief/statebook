import css from "styled-components";
import { bool, string, shape } from "prop-types";

import {
  breakpoint,
  color,
  paint,
  setSize,
  setSpace,
  setType,
  setWidth,
  skin
} from "../../../utils";

import actionBase from "./actionBase";

const Button = css.button`
  font-family: ${({ theme }) => (theme.font ? theme.font : skin.font)};

  /* primary */

  ${({ primary, tone, theme }) => {
    if (primary && tone === "negative") {
      return `
        ${actionBase.graphic};
        background-color: ${
          theme.negativeColor
            ? paint(theme.negativeColor, "M")
            : paint(skin.negativeColor, "M")
        };
        color: ${color.flareBlk};
        &:active {
          background-color: ${
            theme.negativeColor
              ? paint(theme.negativeColor, "HD")
              : paint(skin.negativeColor, "HD")
          };
          color: ${color.white};
        }
      `;
    } else if (primary && tone === "positive") {
      return `
        ${actionBase.graphic};
        background-color: ${
          theme.positiveColor
            ? paint(theme.positiveColor, "M")
            : paint(skin.positiveColor, "M")
        };
        color: ${color.flareBlk};
        &:active {
          background-color: ${
            theme.positiveColor
              ? paint(theme.positiveColor, "HD")
              : paint(skin.positiveColor, "HD")
          };
          color: ${color.white};
        }
      `;
    } else if (primary) {
      return `
        ${actionBase.graphic};
        background-color: ${
          theme.mainColor
            ? paint(theme.mainColor, "M")
            : paint(skin.mainColor, "M")
        };
        color: ${color.flareBlk};
        &:active {
          background-color: ${
            theme.mainColor
              ? paint(theme.mainColor, "HD")
              : paint(skin.mainColor, "HD")
          };
          color: ${color.white};
        }
      `;
    }
    return null;
  }}}

  /* secondary */

  ${({ secondary, tone, theme, active }) => {
    if (secondary && tone === "negative") {
      return `
        ${actionBase.graphic};
        background-color: ${color.white};
        color: ${
          theme.negativeColor
            ? paint(theme.negativeColor, "M")
            : paint(skin.negativeColor, "M")
        };
        &:active {
          color: ${
            theme.negativeColor
              ? paint(theme.negativeColor, "HD")
              : paint(skin.negativeColor, "HD")
          };
        }
      `;
    } else if (secondary && tone === "positive") {
      return `
        ${actionBase.graphic};
        background-color: ${color.white};
        color: ${
          theme.positiveColor
            ? paint(theme.positiveColor, "M")
            : paint(skin.positiveColor, "M")
        };
        &:active {
          color: ${
            theme.positiveColor
              ? paint(theme.positiveColor, "HD")
              : paint(skin.positiveColor, "HD")
          };
        }
      `;
    } else if (secondary) {
      return `
        ${actionBase.graphic};
        background-color: ${color.white};
        color: ${
          theme.mainColor
            ? paint(theme.mainColor, "M")
            : paint(skin.mainColor, "M")
        };
        &:active {
          color: ${
            theme.mainColor
              ? paint(theme.mainColor, "HD")
              : paint(skin.mainColor, "HD")
          };
        }
        ${
          active
            ? `
            box-shadow: 0 2px 4px ${color.blueM}, 0 0 0 1px ${color.blueM};
            border-color: ${color.blueM};
        `
            : ``
        }
      `;
    }
    return null;
  }}}

  /* inverted */

  ${({ inverted, active, disabled }) => {
    if (inverted) {
      return `
        ${actionBase.graphic};
        background-color: ${color.shadowHL};
        border-color: ${color.flareLt};
        color: ${color.flareBlk};
        &:active {
          border-color: ${color.flareLLt};
          color: ${color.white};
        };
        &:active {
          background: ${color.flareLLt};
          color: ${color.white};
          opacity: 0.75;
        }
        ${
          active
            ? `
          background: ${color.flareLLt};
          color: ${color.white};
          opacity: 0.75;
        `
            : ``
        };
        ${
          disabled
            ? `
          background: transparent !important;
          color: ${color.white};
          cursor: default;
        `
            : ``
        };
        ${
          disabled && active
            ? `
          background: ${color.flareLLt} !important;
          color: ${color.white};
          cursor: default;
        `
            : ``
        };
      `;
    }
    return null;
  }}

  /* plain */

  ${({ primary, secondary, inverted, tone, theme }) => {
    if (!primary && !secondary && !inverted) {
      if (tone === "negative") {
        return `
          ${actionBase.textual};
          color: ${
            theme.negativeColor
              ? paint(theme.negativeColor, "M")
              : paint(skin.negativeColor, "M")
          };
          &:active {
            color: ${
              theme.negativeColor
                ? paint(theme.negativeColor, "HD")
                : paint(skin.negativeColor, "HD")
            };
          }
        `;
      } else if (tone === "positive") {
        return `
          ${actionBase.textual};
          color: ${
            theme.positiveColor
              ? paint(theme.positiveColor, "M")
              : paint(skin.positiveColor, "M")
          };
          &:active {
            color: ${
              theme.positiveColor
                ? paint(theme.positiveColor, "HD")
                : paint(skin.positiveColor, "HD")
            };
          }
        `;
      }
      return `
        ${actionBase.textual};
        color: ${
          theme.mainColor
            ? paint(theme.mainColor, "M")
            : paint(skin.mainColor, "M")
        };
        &:active {
          color: ${
            theme.mainColor
              ? paint(theme.mainColor, "HD")
              : paint(skin.mainColor, "HD")
          };
        }
      `;
    }
    return null;
  }}

  /* iconic */

  ${({ iconic, primary, secondary, inverted }) => {
    if (iconic && (primary || secondary || inverted)) {
      return `
        ${setSize("m")};
        ${setSpace("pan")};
        text-align: center;
      `;
    } else if (iconic && (!primary && !secondary && !inverted)) {
      return `
        ${setWidth("m")};
        ${setType("l")};
        text-align: center;
      `;
    } else if (!iconic && (primary || secondary || inverted)) {
      return `
        min-height: 40px;
        & > i:first-child {
          ${setSpace("mrx")};
        }
        & > i:last-child {
          ${setSpace("mlx")};
        }
      `;
    }
    return null;
  }}

  /* fixed-width */
  ${({ fixed }) =>
    fixed
      ? `
    ${setSpace("phx")};
    width: 130px;
    ${breakpoint.tablet} {
      width: 160px;
    }
    ${breakpoint.desktop} {
      width: 190px;
    }
  `
      : ``};

  /* disabled */

  ${({ disabled }) =>
    disabled
      ? `
    background: ${color.greyLt};
    box-shadow: none;
    cursor: default;
    &:active {
      background: ${color.greyLt};
      box-shadow: none;
      cursor: default;
      transform: none;
    }
  `
      : ``};

`;

Button.propTypes = {
  inverted: bool,
  primary: bool,
  secondary: bool,
  tone: string,
  theme: shape({
    font: string,
    mainColor: string,
    negativeColor: string,
    positiveColor: string
  })
};

Button.defaultProps = {
  inverted: false,
  primary: false,
  secondary: false,
  tone: null,
  theme: {
    font: skin.font,
    mainColor: skin.mainColor,
    negativeColor: skin.negativeColor,
    positiveColor: skin.positiveColor
  }
};

export default Button;
