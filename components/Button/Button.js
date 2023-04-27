import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, cloneElement } from 'react';
import { button } from 'grommet-exp-theme';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const Button = forwardRef((_a, ref) => {
    var { active, icon: iconProp, kind = "default", label, onClick, reverse, size, type = "button" } = _a, rest = __rest(_a, ["active", "icon", "kind", "label", "onClick", "reverse", "size", "type"]);
    const icon = iconProp && !iconProp.props.size
        ? cloneElement(iconProp, { size })
        : iconProp;
    const iconOnly = (icon && !label) || undefined;
    let content;
    if (icon && label) {
        content = (jsx(Box, Object.assign({ direction: "row", gap: "small", align: "center" }, { children: reverse ? label + icon : icon + label })));
    }
    else
        content = icon || label;
    return (jsx("button", Object.assign({ ref: ref, className: button({ active, iconOnly, kind, size }), type: type, onClick: onClick }, rest, { children: content })));
});
Button.displayName = "Button";

export { Button };
