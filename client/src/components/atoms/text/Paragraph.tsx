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

export const Paragraph = styled.p<Props>`
  font-size: 1rem;
  margin-top: 0;

  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${typography}
`;
