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
  TypographyProps,
  typography,
} from "styled-system";

interface Props
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}

export const Link = styled.a<Props>`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
  ${typography};
  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;
