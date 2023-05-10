import { __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { anchor } from 'grommet-exp-theme';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const Anchor = forwardRef((_a, ref) => {
    var { children, disabled, href, icon, label, reverse, size } = _a, rest = __rest(_a, ["children", "disabled", "href", "icon", "label", "reverse", "size"]);
    let content = children;
    const first = reverse ? label : icon;
    const second = reverse ? icon : label;
    if (label || icon)
        content = (jsxs(Box, Object.assign({ direction: "row", align: "center", gap: "xsmall" }, { children: [first, second] })));
    return (jsx("a", Object.assign({ className: anchor({ size }), ref: ref }, rest, { href: !disabled ? href : undefined }, { children: content })));
});
Anchor.displayName = "Anchor";

export { Anchor };
