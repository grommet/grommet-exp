import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import '../Grid/index.js';
import { NameValueListContext } from './NameValueListContext.js';
import { Grid } from '../Grid/Grid.js';

const NameValueList = forwardRef((_a, ref) => {
    var { align, gap, layout = 'column', nameProps, pairProps = { direction: 'row' }, valueProps } = _a, rest = __rest(_a, ["align", "gap", "layout", "nameProps", "pairProps", "valueProps"]);
    const contextValue = useMemo(() => ({ nameProps, pairProps, valueProps }), [nameProps, pairProps, valueProps]);
    // If layout is grid, valueWidth sets the max width of the column.
    // Grid will 'fit' as many columns of valueWidth per row as container's
    // width allows.
    let columns;
    const nameWidth = (nameProps === null || nameProps === void 0 ? void 0 : nameProps.width) || "small";
    const valueWidth = (valueProps === null || valueProps === void 0 ? void 0 : valueProps.width) || "medium";
    if (layout === "grid")
        columns = valueWidth;
    else if (layout === "column" && (pairProps === null || pairProps === void 0 ? void 0 : pairProps.direction) === "row")
        columns = `${nameWidth}-${valueWidth}`;
    else
        columns = valueWidth;
    return (jsx(NameValueListContext.Provider, Object.assign({ value: contextValue }, { children: jsx(Grid, Object.assign({ as: "dl", ref: ref, columns: columns, gap: {
                column: "large",
                row: "small",
            }, margin: "none" // override browser default margin for dl
         }, rest)) })));
});
NameValueList.displayName = "NameValueList";

export { NameValueList };
