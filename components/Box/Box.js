import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { box } from 'grommet-exp-theme';
import { translateMargin, translatePad } from '../utils.js';

const Box = forwardRef((_a, ref) => {
    var { align, as, background, border, direction = "column", elevation, flex, gap, height, justify, margin, pad, round, width, wrap } = _a, rest = __rest(_a, ["align", "as", "background", "border", "direction", "elevation", "flex", "gap", "height", "justify", "margin", "pad", "round", "width", "wrap"]);
    const Element = as || 'div';
    return (jsx(Element, Object.assign({ className: box(Object.assign(Object.assign(Object.assign({ align,
            background,
            border,
            direction,
            elevation,
            flex,
            gap,
            height,
            justify }, translateMargin(margin)), translatePad(pad)), { round,
            width,
            wrap })), ref: ref }, rest)));
});
Box.displayName = "Box";

export { Box };
