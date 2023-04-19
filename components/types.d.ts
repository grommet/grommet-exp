export type SizeType = "small" | "medium" | "large" | "none";
export type SpacingSizeType = "xsmall" | "small" | "medium" | "large" | "none";
export type SpacingType = SpacingSizeType | {
    horizontal?: SpacingSizeType;
    vertical?: SpacingSizeType;
    top?: SpacingSizeType;
    bottom?: SpacingSizeType;
    start?: SpacingSizeType;
    end?: SpacingSizeType;
};
export type PadStyleType = {
    pad?: SpacingSizeType;
    padHorizontal?: SpacingSizeType;
    padVertical?: SpacingSizeType;
    padTop?: SpacingSizeType;
    padBottom?: SpacingSizeType;
    padStart?: SpacingSizeType;
    padEnd?: SpacingSizeType;
};
export type MarginStyleType = {
    margin?: SpacingSizeType;
    marginHorizontal?: SpacingSizeType;
    marginVertical?: SpacingSizeType;
    marginTop?: SpacingSizeType;
    marginBottom?: SpacingSizeType;
    marginStart?: SpacingSizeType;
    marginEnd?: SpacingSizeType;
};
