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
  border?: boolean | "top" | "bottom";
  children?: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  elevation?: "small" | "medium" | "large";
  flex?: boolean | "grow" | "shrink";
  gap?: SpacingSizeType;
  height?: ContentSizeType;
  justify?: JustifyType;
  margin?: SpacingType;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => any;
  pad?: SpacingType;
  position?: "absolute" | "fixed" | "relative";
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
      className,
      direction = "column",
      elevation,
      flex,
      gap,
      height,
      justify,
      margin,
      pad,
      position,
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
        className={`${box({
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
          position,
          round,
          width,
          wrap,
        })} ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

Box.displayName = "Box";

export { Box, BoxProps };
