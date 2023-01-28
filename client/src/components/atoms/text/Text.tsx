import styled, { CSSProperties } from "styled-components";
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
  system,
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
    TypographyProps {
  whiteSpace?: CSSProperties["whiteSpace"];
  textOverflow?: CSSProperties["textOverflow"];
}

export const Text = styled.span<Props>`
  font-size: 1rem;
  margin: 0;

  ${system({
    whiteSpace: true,
    textOverflow: true,
  })};
  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${typography}
`;
