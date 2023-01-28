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
  typography,
  TypographyProps,
} from "styled-system";

interface Props
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}

export const Title = styled.h1<Props>`
  font-size: 2rem;
  margin: 0;

  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${typography}
`;
