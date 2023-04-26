import { forwardRef } from "react";
import { box } from "grommet-exp-theme";
import { ContentSizeType, SpacingSizeType, SpacingType } from "../types";
import { translateMargin, translatePad } from "../utils";

export type AlignType = "start" | "center" | "stretch" | "end";
export type JustifyType = "start" | "center" | "between" | "end";

type BoxProps = {
  align?: AlignType;
  as?: React.ElementType;
  background?: "default" | "back" | "front" | "contrast";
  border?: boolean | "top" | "bottom" | "left" | "right";
  children?: React.ReactNode | React.ReactNode[];
  direction?: "row" | "column";
  elevation?: "small" | "medium" | "large";
  flex?: boolean | "grow" | "shrink";
  gap?: SpacingSizeType;
  height?: ContentSizeType;
  justify?: JustifyType;
  margin?: SpacingType;
  pad?: SpacingType;
  round?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "full";
  width?: ContentSizeType;
  wrap?: boolean;
};

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      align,
      as,
      background,
      border,
      direction = "column",
      elevation,
      flex,
      gap,
      height,
      justify,
      margin,
      pad,
      round,
      width,
      wrap,
      ...rest
    }: BoxProps,
    ref
  ): JSX.Element => {
    const Element = as || "div";
    return (
      <Element
        className={box({
          align,
          background,
          border,
          direction,
          elevation,
          flex,
          gap,
          height,
          justify,
          ...translateMargin(margin),
          ...translatePad(pad),
          round,
          width,
          wrap,
        })}
        ref={ref}
        {...rest}
      />
    );
  }
);

Box.displayName = "Box";

export { Box, BoxProps };
