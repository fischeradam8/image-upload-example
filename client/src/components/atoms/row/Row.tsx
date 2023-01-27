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
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    PositionProps,
    ColorProps,
    BorderProps {
  gap?: number | string;
}

export const Row = styled.div<Props>`
  display: flex;
  margin-top: 0;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: ${(props) => (props.gap ? `${props.gap}rem` : "1rem")};
  }
  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;
