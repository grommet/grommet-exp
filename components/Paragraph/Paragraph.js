import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

const Paragraph = forwardRef((_a, ref) => {
    var { color, level: levelProp, size } = _a, rest = __rest(_a, ["color", "level", "size"]);
    const level = !size ? levelProp : undefined;
    return (jsx("p", Object.assign({ className: text({ color, level, size }), ref: ref }, rest)));
});
Paragraph.displayName = "Paragraph";

export { Paragraph };
