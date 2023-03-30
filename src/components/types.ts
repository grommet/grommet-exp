export type SizeType = "small" | "medium" | "large" | "none";

export type SpacingType =
  | SizeType
  | {
      horizontal?: SizeType;
      vertical?: SizeType;
      top?: SizeType;
      bottom?: SizeType;
      start?: SizeType;
      end?: SizeType;
    };

export type PadStyleType = {
  pad?: SizeType;
  padHorizontal?: SizeType;
  padVertical?: SizeType;
  padTop?: SizeType;
  padBottom?: SizeType;
  padStart?: SizeType;
  padEnd?: SizeType;
};

export type MarginStyleType = {
  margin?: SizeType;
  marginHorizontal?: SizeType;
  marginVertical?: SizeType;
  marginTop?: SizeType;
  marginBottom?: SizeType;
  marginStart?: SizeType;
  marginEnd?: SizeType;
};
