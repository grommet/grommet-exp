import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useContext, Fragment } from 'react';
import '../Box/index.js';
import '../Text/index.js';
import '../NameValueList/index.js';
import { NameValueListContext } from '../NameValueList/NameValueListContext.js';
import { Box } from '../Box/Box.js';
import { Text } from '../Text/Text.js';

const NameValuePair = forwardRef((_a, ref) => {
    var { children, name: nameProp } = _a, rest = __rest(_a, ["children", "name"]);
    const { nameProps, pairProps, valueProps } = useContext(NameValueListContext);
    const direction = pairProps === null || pairProps === void 0 ? void 0 : pairProps.direction;
    const column = direction === "column" || direction === "column-reverse";
    const Container = column ? Box : Fragment;
    const nameAlign = nameProps === null || nameProps === void 0 ? void 0 : nameProps.align;
    const valueAlign = valueProps === null || valueProps === void 0 ? void 0 : valueProps.align;
    // using margin to act as gap
    // <dl> elements must only directly contain
    // properly-ordered <dt> and <dd> groups
    const valueGap = column ? { bottom: "xxsmall" } : undefined;
    let name;
    if (typeof nameProp === "string" || typeof nameProp === "number") {
        name = (jsx(Text, Object.assign({ as: "dt", margin: valueGap, textAlign: nameAlign, color: "strong", weight: "medium" }, { children: nameProp })));
    }
    else
        name = (jsx(Box, Object.assign({ as: "dt", align: nameAlign }, { children: nameProp })));
    let value;
    if (typeof children === "string" || typeof children === "number")
        value = (
        // override browser default margin for dd
        jsx(Text, Object.assign({ as: "dd", margin: "none", textAlign: valueAlign }, { children: children })));
    else
        value = (
        // override browser default margin for dd
        jsx(Box, Object.assign({ margin: "none", as: "dd", align: valueAlign }, { children: children })));
    const first = direction !== "column-reverse" ? name : value;
    const second = direction !== "column-reverse" ? value : name;
    return (jsxs(Container, { children: [first, second] }));
});
NameValuePair.displayName = "NameValuePair";

export { NameValuePair };
