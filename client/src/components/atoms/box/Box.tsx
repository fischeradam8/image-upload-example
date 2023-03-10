import styled from "styled-components";
import {
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
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
} from "styled-system";

interface Props
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export const Box = styled.div<Props>`
  ${border};
  ${boxShadow};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;
