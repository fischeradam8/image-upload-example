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
} from "styled-system";

interface Props
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export const Box = styled.div<Props>`
  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;
