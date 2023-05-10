import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useContext, cloneElement } from 'react';
import { buttonIcon, button } from 'grommet-exp-theme';
import '../Box/index.js';
import { ButtonContext } from './ButtonContext.js';
import { Box } from '../Box/Box.js';

const Button = forwardRef((_a, ref) => {
    var { active, icon: iconProp, kind: kindProp = "default", label, onClick, reverse, size = "medium", type = "button", style } = _a, rest = __rest(_a, ["active", "icon", "kind", "label", "onClick", "reverse", "size", "type", "style"]);
    const { kind: contextKind } = useContext(ButtonContext);
    const kind = contextKind !== null && contextKind !== void 0 ? contextKind : kindProp;
    const icon = iconProp && !iconProp.props.size
        ? cloneElement(iconProp, {
            className: buttonIcon({ kind, size }),
            key: "icon",
        })
        : iconProp;
    const iconOnly = (icon && !label) || undefined;
    let content;
    if (icon && label) {
        content = [icon, jsx("span", { children: label }, "label")];
        content = (jsx(Box, Object.assign({ direction: "row", gap: "small", align: "center" }, { children: reverse ? content.reverse() : content })));
    }
    else
        content = icon || label;
    return (jsx("button", Object.assign({ ref: ref, className: button({ active, iconOnly, kind, size }), type: type, onClick: onClick, style: style }, rest, { children: content })));
});
Button.displayName = "Button";

export { Button };
