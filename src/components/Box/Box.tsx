import { forwardRef } from "react";
import { box } from "grommet-exp-theme";

type SizeType = "small" | "medium" | "large";
type AlignType = "start" | "center" | "stretch" | "end";
type JustifyType = "start" | "center" | "between" | "end";

type SpacingType = SizeType | "none";
type EdgesSpacingType =
  | SizeType
  | {
      horizontal?: SizeType;
      vertical?: SizeType;
      top?: SizeType;
      bottom?: SizeType;
      start?: SizeType;
      end?: SizeType;
    };

type BoxProps = {
  align?: AlignType;
  as?: React.ElementType;
  background?: "normal" | "back" | "front" | "contrast";
  border?: boolean | "top" | "bottom";
  children?: React.ReactNode | React.ReactNode[];
  direction?: "row" | "column";
  elevation?: SizeType;
  flex?: boolean | "grow" | "shrink";
  gap?: SpacingType;
  height?: SizeType;
  justify?: JustifyType;
  margin?: EdgesSpacingType;
  pad?: EdgesSpacingType;
  round?: SizeType;
  width?: SizeType;
  wrap?: boolean;
};

type PadStyleType = {
  pad?: SizeType;
  padHorizontal?: SizeType;
  padVertical?: SizeType;
  padTop?: SizeType;
  padBottom?: SizeType;
  padStart?: SizeType;
  padEnd?: SizeType;
};

const translatePad = (pad? : EdgesSpacingType) : PadStyleType => {
  const result : PadStyleType = {};
  if (!pad) return result;
  if (typeof pad === 'string') result.pad = pad;
  if (typeof pad === 'object') {
    if (pad.horizontal) result.padHorizontal = pad.horizontal;
    if (pad.vertical) result.padVertical = pad.vertical;
    if (pad.top) result.padTop = pad.top;
    if (pad.bottom) result.padBottom = pad.bottom;
    if (pad.start) result.padStart = pad.start;
    if (pad.end) result.padEnd = pad.end;
  }
  return result;
}

type MarginStyleType = {
  margin?: SizeType;
  marginHorizontal?: SizeType;
  marginVertical?: SizeType;
  marginTop?: SizeType;
  marginBottom?: SizeType;
  marginStart?: SizeType;
  marginEnd?: SizeType;
};

const translateMargin = (margin? : EdgesSpacingType) : MarginStyleType => {
  const result : MarginStyleType = {};
  if (!margin) return result;
  if (typeof margin === 'string') result.margin = margin;
  if (typeof margin === 'object') {
    if (margin.horizontal) result.marginHorizontal = margin.horizontal;
    if (margin.vertical) result.marginVertical = margin.vertical;
    if (margin.top) result.marginTop = margin.top;
    if (margin.bottom) result.marginBottom = margin.bottom;
    if (margin.start) result.marginStart = margin.start;
    if (margin.end) result.marginEnd = margin.end;
  }
  return result;
}

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
