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

interface Props
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {
  variant?: "ghost";
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
  },
})};
  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;
