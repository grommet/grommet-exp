import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, createElement } from 'react';
import { heading } from 'grommet-exp-theme';

var Heading = forwardRef(function (_a, ref) {
    var children = _a.children, level = _a.level, rest = __rest(_a, ["children", "level"]);
    var Heading = function (_a) {
        var props = __rest(_a, []);
        return createElement("h".concat(level), __assign(__assign({}, props), { ref: ref }), children);
    };
    return jsx(Heading, __assign({ className: heading({ level: level }) }, rest));
});
Heading.displayName = "Heading";

export { Heading };
//# sourceMappingURL=Heading.js.map
