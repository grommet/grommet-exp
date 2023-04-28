import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect, useCallback } from 'react';
import { input, select, optionButton } from 'grommet-exp-theme';
import '../Box/index.js';
import '../Drop/index.js';
import { Box } from '../Box/Box.js';
import { Drop } from '../Drop/Drop.js';

// TODO: keyboard interaction, WCAG attributes
// embedded for now
const FormDown = () => (jsx("svg", Object.assign({ width: "18", height: "18", viewBox: "0 0 24 24" }, { children: jsx("polyline", { fill: "none", stroke: "#000", strokeWidth: "2", points: "7.086 3.174 17.086 13.174 7.086 23.174", transform: "scale(1 -1) rotate(-89 -1.32 0)" }) })));
const splitOption = (option) => {
    const label = typeof option === "string" ? option : option.label;
    const value = typeof option === "string" ? option : option.value;
    return [label, value];
};
const Select = forwardRef((_a, ref) => {
    var { defaultValue, options = [], value: valueProp } = _a, rest = __rest(_a, ["defaultValue", "options", "value"]);
    const [value, setValue] = useState(valueProp !== null && valueProp !== void 0 ? valueProp : defaultValue);
    const [open, setOpen] = useState();
    useEffect(() => {
        if (open) {
            const close = () => setOpen(false);
            document.addEventListener("click", close);
            return () => document.removeEventListener("click", close);
        }
        return undefined;
    }, [open]);
    const onClick = useCallback((event) => {
        event.stopPropagation();
        setOpen((prev) => !prev);
    }, []);
    return (jsxs(Box, { children: [jsxs(Box, Object.assign({ className: input, align: "center", direction: "row", justify: "between", onClick: onClick }, { children: [jsx(Box, Object.assign({ as: "span", flex: true }, { children: value })), jsx(FormDown, {})] })), jsx("select", Object.assign({ ref: ref, className: select }, rest, { value: value }, { children: options.map((option) => {
                    const [label, val] = splitOption(option);
                    return (jsx("option", Object.assign({ value: value }, { children: label }), val));
                }) })), open ? (jsx(Drop, { children: options.map((option) => {
                    const [label, val] = splitOption(option);
                    return (jsx("button", Object.assign({ className: optionButton, onClick: (event) => {
                            event.stopPropagation();
                            setOpen(false);
                            setValue(val);
                        } }, { children: label }), val));
                }) })) : null] }));
});
Select.displayName = "Select";

export { Select };
