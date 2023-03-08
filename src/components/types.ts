// UNUSED
export type SizeType = "small" | "medium" | "large";
export type AlignType = "start" | "center" | "stretch" | "end";
export type JustifyType = "start" | "center" | "between" | "end";

export type SpacingType = SizeType;
export type SpacingType2 =
  | SizeType
  | {
      horizontal?: SizeType;
      vertical?: SizeType;
      top?: SizeType;
      bottom?: SizeType;
      start?: SizeType;
      end?: SizeType;
    };
