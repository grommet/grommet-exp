import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

var Text = forwardRef(function (_a, ref) {
    var color = _a.color, levelProp = _a.level, size = _a.size, rest = __rest(_a, ["color", "level", "size"]);
    var level = !size ? levelProp : undefined;
    return (jsx("span", __assign({ className: text({ color: color, level: level, size: size }), ref: ref }, rest)));
});
Text.displayName = "Text";

export { Text };
//# sourceMappingURL=Text.js.map
