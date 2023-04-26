import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { icon } from 'grommet-exp-theme';

const Icon = forwardRef((_a, ref) => {
    var { height, size } = _a, rest = __rest(_a, ["height", "size"]);
    return (jsx("img", Object.assign({ className: icon({ height, size }), ref: ref }, rest)));
});
Icon.displayName = "Icon";

export { Icon };
