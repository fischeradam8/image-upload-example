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
  variant,
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
  variant?: "description" | "label";
}

export const Text = styled.span<Props>`
  font-size: 1rem;
  margin: 0;

  ${system({
    whiteSpace: true,
    textOverflow: true,
  })};

  ${variant({
    variants: {
      description: {
        color: "contrastText",
        display: "-webkit-box",
        fontSize: "0.8rem",
        overflow: "hidden",
        maxWidth: "15rem",
        "-webkit-line-clamp": "5",
        "-webkit-box-orient": "vertical",
      },
      label: {
        color: "primary",
        fontSize: "0.8rem",
        fontWeight: "bold",
      },
    },
  })};

  ${border};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${typography}
`;
