import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import '../Grid/index.js';
import { NameValueListContext } from './NameValueListContext.js';
import { Grid } from '../Grid/Grid.js';

var NameValueList = forwardRef(function (_a, ref) {
    var align = _a.align, gap = _a.gap, _b = _a.layout, layout = _b === void 0 ? 'column' : _b, nameProps = _a.nameProps, _c = _a.pairProps, pairProps = _c === void 0 ? { direction: 'row' } : _c, valueProps = _a.valueProps, rest = __rest(_a, ["align", "gap", "layout", "nameProps", "pairProps", "valueProps"]);
    var contextValue = useMemo(function () { return ({ nameProps: nameProps, pairProps: pairProps, valueProps: valueProps }); }, [nameProps, pairProps, valueProps]);
    // If layout is grid, valueWidth sets the max width of the column.
    // Grid will 'fit' as many columns of valueWidth per row as container's
    // width allows.
    var columns;
    var nameWidth = (nameProps === null || nameProps === void 0 ? void 0 : nameProps.width) || "small";
    var valueWidth = (valueProps === null || valueProps === void 0 ? void 0 : valueProps.width) || "medium";
    if (layout === "grid")
        columns = valueWidth;
    else if (layout === "column" && (pairProps === null || pairProps === void 0 ? void 0 : pairProps.direction) === "row")
        columns = "".concat(nameWidth, "-").concat(valueWidth);
    else
        columns = valueWidth;
    return (jsx(NameValueListContext.Provider, __assign({ value: contextValue }, { children: jsx(Grid, __assign({ as: "dl", ref: ref, columns: columns, gap: {
                column: "large",
                row: "small",
            }, margin: "none" // override browser default margin for dl
         }, rest)) })));
});
NameValueList.displayName = "NameValueList";

export { NameValueList };
//# sourceMappingURL=NameValueList.js.map
