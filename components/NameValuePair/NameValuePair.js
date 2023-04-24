import { __rest, __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useContext, Fragment } from 'react';
import '../Box/index.js';
import '../Text/index.js';
import '../NameValueList/index.js';
import { NameValueListContext } from '../NameValueList/NameValueListContext.js';
import { Box } from '../Box/Box.js';
import { Text } from '../Text/Text.js';

var NameValuePair = forwardRef(function (_a, ref) {
    var children = _a.children, nameProp = _a.name, rest = __rest(_a, ["children", "name"]);
    var _b = useContext(NameValueListContext), nameProps = _b.nameProps, pairProps = _b.pairProps, valueProps = _b.valueProps;
    var direction = pairProps === null || pairProps === void 0 ? void 0 : pairProps.direction;
    var column = direction === "column" || direction === "column-reverse";
    var Container = column ? Box : Fragment;
    var nameAlign = nameProps === null || nameProps === void 0 ? void 0 : nameProps.align;
    var valueAlign = valueProps === null || valueProps === void 0 ? void 0 : valueProps.align;
    // using margin to act as gap
    // <dl> elements must only directly contain
    // properly-ordered <dt> and <dd> groups
    var valueGap = column ? { bottom: "xxsmall" } : undefined;
    var name;
    if (typeof nameProp === "string" || typeof nameProp === "number") {
        name = (jsx(Text, __assign({ as: "dt", margin: valueGap, textAlign: nameAlign, color: "strong", weight: "medium" }, { children: nameProp })));
    }
    else
        name = (jsx(Box, __assign({ as: "dt", align: nameAlign }, { children: nameProp })));
    var value;
    if (typeof children === "string" || typeof children === "number")
        value = (
        // override browser default margin for dd
        jsx(Text, __assign({ as: "dd", margin: "none", textAlign: valueAlign }, { children: children })));
    else
        value = (
        // override browser default margin for dd
        jsx(Box, __assign({ margin: "none", as: "dd", align: valueAlign }, { children: children })));
    var first = direction !== "column-reverse" ? name : value;
    var second = direction !== "column-reverse" ? value : name;
    return (jsxs(Container, { children: [first, second] }));
});
NameValuePair.displayName = "NameValuePair";

export { NameValuePair };
//# sourceMappingURL=NameValuePair.js.map
