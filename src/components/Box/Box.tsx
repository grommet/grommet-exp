import { forwardRef } from "react";
import { box } from "grommet-exp-theme";
import { SizeType, SpacingType } from "../types";
import { translateMargin, translatePad } from "../utils";

type AlignType = "start" | "center" | "stretch" | "end";
type JustifyType = "start" | "center" | "between" | "end";

type BoxProps = {
  align?: AlignType;
  as?: React.ElementType;
  background?: "normal" | "back" | "front" | "contrast";
  border?: boolean | "top" | "bottom";
  children?: React.ReactNode | React.ReactNode[];
  direction?: "row" | "column";
  elevation?: SizeType;
  flex?: boolean | "grow" | "shrink";
  gap?: SizeType;
  height?: SizeType;
  justify?: JustifyType;
  margin?: SpacingType;
  pad?: SpacingType;
  round?: SizeType;
  width?: SizeType;
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
    const Element = as || 'div';
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
