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

export const TextArea = styled.textarea<Props>`
  resize: none;
  width: 100%;
  height: 100%;

  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;
