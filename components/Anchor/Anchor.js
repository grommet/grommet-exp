import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { anchor } from 'grommet-exp-theme';

const Anchor = forwardRef((_a, ref) => {
    var { disabled, href } = _a, rest = __rest(_a, ["disabled", "href"]);
    return (jsx("a", Object.assign({ className: anchor, ref: ref }, rest, { href: !disabled ? href : undefined })));
});
Anchor.displayName = 'Anchor';

export { Anchor };
