import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

var Paragraph = forwardRef(function (_a, ref) {
    var color = _a.color, levelProp = _a.level, size = _a.size, rest = __rest(_a, ["color", "level", "size"]);
    var level = !size ? levelProp : undefined;
    return (jsx("p", __assign({ className: text({ color: color, level: level, size: size }), ref: ref }, rest)));
});
Paragraph.displayName = "Paragraph";

export { Paragraph };
//# sourceMappingURL=Paragraph.js.map
