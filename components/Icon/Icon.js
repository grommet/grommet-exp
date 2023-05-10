import { __rest } from 'tslib';
import { forwardRef, cloneElement } from 'react';
import { icon } from 'grommet-exp-theme';

const Icon = forwardRef((_a, ref) => {
    var { height, size, svg } = _a, rest = __rest(_a, ["height", "size", "svg"]);
    return cloneElement(svg, Object.assign({ className: icon({ height, size }) }, rest));
});
Icon.displayName = "Icon";

export { Icon };
