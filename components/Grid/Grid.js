import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { grid } from 'grommet-exp-theme';
import { translateMargin, translatePad } from '../utils.js';

const translateGap = (gap) => {
    const result = {};
    if (!gap)
        return result;
    if (typeof gap === "string")
        result.gap = gap;
    if (typeof gap === "object") {
        if (gap.column)
            result.gapColumn = gap.column;
        if (gap.row)
            result.gapRow = gap.row;
    }
    return result;
};
const Grid = forwardRef((_a, ref) => {
    var { as, align, columns, gap, height, margin = "none", pad = "none", width } = _a, rest = __rest(_a, ["as", "align", "columns", "gap", "height", "margin", "pad", "width"]);
    const Element = as || "div";
    return (jsx(Element, Object.assign({ className: grid(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ align,
            columns }, translateGap(gap)), { height }), translateMargin(margin)), translatePad(pad)), { width })), ref: ref }, rest)));
});
Grid.displayName = "Grid";

export { Grid };
