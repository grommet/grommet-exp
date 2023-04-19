import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { anchor } from 'grommet-exp-theme';

var Anchor = forwardRef(function (_a, ref) {
    var disabled = _a.disabled, href = _a.href, rest = __rest(_a, ["disabled", "href"]);
    return (jsx("a", __assign({ className: anchor, ref: ref }, rest, { href: !disabled ? href : undefined })));
});
Anchor.displayName = 'Anchor';

export { Anchor };
//# sourceMappingURL=Anchor.js.map
