import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { icon } from 'grommet-exp-theme';

var Icon = forwardRef(function (_a, ref) {
    var height = _a.height, size = _a.size, rest = __rest(_a, ["height", "size"]);
    return (jsx("img", __assign({ className: icon({ height: height, size: size }), ref: ref }, rest)));
});
Icon.displayName = "Icon";

export { Icon };
//# sourceMappingURL=Icon.js.map
