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

export const Col = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-top: 0;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => (props.gap ? `${props.gap}em` : "1em")};
  }
  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;
