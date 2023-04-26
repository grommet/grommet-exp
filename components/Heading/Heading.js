import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, createElement } from 'react';
import { heading } from 'grommet-exp-theme';

const Heading = forwardRef((_a, ref) => {
    var { children, level } = _a, rest = __rest(_a, ["children", "level"]);
    const Heading = (_a) => {
        var props = __rest(_a, []);
        return createElement(`h${level}`, Object.assign(Object.assign({}, props), { ref }), children);
    };
    return jsx(Heading, Object.assign({ className: heading({ level }) }, rest));
});
Heading.displayName = "Heading";

export { Heading };
