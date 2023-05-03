import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

const Text = forwardRef((_a, ref) => {
    var { as, className: classNameProp, color, level: levelProp, size, textAlign, weight } = _a, rest = __rest(_a, ["as", "className", "color", "level", "size", "textAlign", "weight"]);
    const Element = as || "span";
    const level = !size ? levelProp : undefined;
    let className = text({ color, level, size, textAlign, weight });
    if (classNameProp)
        className = `${className} ${classNameProp}`;
    return jsx(Element, Object.assign({ className: className, ref: ref }, rest));
});
Text.displayName = "Text";

export { Text };
