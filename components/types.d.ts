export type ContentSizeType = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "none";
export type SpacingSizeType = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "none";
export type SpacingType = SpacingSizeType | {
    horizontal?: SpacingSizeType;
    vertical?: SpacingSizeType;
    top?: SpacingSizeType;
    bottom?: SpacingSizeType;
    start?: SpacingSizeType;
    end?: SpacingSizeType;
} | undefined;
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
