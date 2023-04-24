import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

var Text = forwardRef(function (_a, ref) {
    var as = _a.as, color = _a.color, levelProp = _a.level, size = _a.size, textAlign = _a.textAlign, weight = _a.weight, rest = __rest(_a, ["as", "color", "level", "size", "textAlign", "weight"]);
    var Element = as || "span";
    var level = !size ? levelProp : undefined;
    return (jsx(Element, __assign({ className: text({ color: color, level: level, size: size, textAlign: textAlign, weight: weight }), ref: ref }, rest)));
});
Text.displayName = "Text";

export { Text };
//# sourceMappingURL=Text.js.map
