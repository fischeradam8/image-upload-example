import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  variant,
} from "styled-system";
import { themeGet } from "@styled-system/theme-get";

interface Props
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {
  variant?: "ghost" | "primary";
}

export const Button = styled.button<Props>`
  cursor: pointer;
  ${variant({
    variants: {
      ghost: {
        borderRadius: 0,
        borderColor: "transparent",
        backgroundColor: "transparent",
        padding: 0,
      },
      primary: {
        borderRadius: 5,
        borderColor: "border",
        borderWidth: "1px",
        padding: "0.5rem 2rem",
        backgroundColor: "primary",
        fontWeight: "bold",
      },
    },
  })};

  :disabled {
    background-color: ${themeGet("colors.disabledBackground", "#fff")};
    border-color: ${themeGet("colors.disabledBackground", "#fff")};
    color: ${themeGet("colors.disabledText", "#fff")};
    cursor: not-allowed;
  }

  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;
