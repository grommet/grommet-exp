import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { grommet } from 'grommet-exp-theme';

var Grommet = forwardRef(function (_a, ref) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: grommet, ref: ref }, rest, { children: children })));
});
Grommet.displayName = "Grommet";

export { Grommet };
//# sourceMappingURL=Grommet.js.map
