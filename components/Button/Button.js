import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, cloneElement } from 'react';
import { button } from 'grommet-exp-theme';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

var Button = forwardRef(function (_a, ref) {
    var active = _a.active, iconProp = _a.icon, _b = _a.kind, kind = _b === void 0 ? "default" : _b, label = _a.label, reverse = _a.reverse, size = _a.size, _c = _a.type, type = _c === void 0 ? "button" : _c, rest = __rest(_a, ["active", "icon", "kind", "label", "reverse", "size", "type"]);
    var icon = iconProp && !iconProp.props.size
        ? cloneElement(iconProp, { size: size })
        : iconProp;
    var iconOnly = (icon && !label) || undefined;
    var content;
    if (icon && label) {
        content = (jsx(Box, __assign({ direction: "row", gap: "small", align: "center" }, { children: reverse ? label + icon : icon + label })));
    }
    else
        content = icon || label;
    return (jsx("button", __assign({ ref: ref, className: button({ active: active, iconOnly: iconOnly, kind: kind, size: size }), type: type }, rest, { children: content })));
});
Button.displayName = "Button";

export { Button };
//# sourceMappingURL=Button.js.map
