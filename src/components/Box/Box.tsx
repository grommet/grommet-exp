import { forwardRef } from "react";
import { box } from "grommet-exp-theme";

type SizeType = "small" | "medium" | "large";
type AlignType = "start" | "center" | "stretch" | "end";
type JustifyType = "start" | "center" | "between" | "end";

type SpacingType = SizeType;
// type SpacingType = SizeType | { horizontal?: SizeType, vertical?: SizeType }

type BoxProps = {
  align?: AlignType;
  background?: "base" | "back" | "front" | "contrast";
  border?: boolean;
  children?: React.ReactNode;
  direction?: "row" | "column";
  elevation?: SizeType;
  flex?: boolean | "grow" | "shrink";
  gap?: SpacingType;
  height?: SizeType;
  justify?: JustifyType;
  margin?: SpacingType;
  pad?: SpacingType;
  round?: SpacingType;
  width?: SizeType;
  wrap?: boolean;
};

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      align,
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
  ) => {
    return (
      <div
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
          margin,
          pad,
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

export { Box };
