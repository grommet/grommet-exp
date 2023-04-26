import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

const Text = forwardRef((_a, ref) => {
    var { as, color, level: levelProp, size, textAlign, weight } = _a, rest = __rest(_a, ["as", "color", "level", "size", "textAlign", "weight"]);
    const Element = as || "span";
    const level = !size ? levelProp : undefined;
    return (jsx(Element, Object.assign({ className: text({ color, level, size, textAlign, weight }), ref: ref }, rest)));
});
Text.displayName = "Text";

export { Text };
