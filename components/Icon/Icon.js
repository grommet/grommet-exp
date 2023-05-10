import { __rest } from 'tslib';
import { forwardRef, cloneElement } from 'react';
import { icon } from 'grommet-exp-theme';

const Icon = forwardRef((_a, ref) => {
    var { size, svg } = _a, rest = __rest(_a, ["size", "svg"]);
    return cloneElement(svg, Object.assign({ className: icon({ size }) }, rest));
});
Icon.displayName = "Icon";

export { Icon };
