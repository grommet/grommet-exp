import { __rest, __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, cloneElement, createElement, createContext, useMemo, useContext, Fragment } from 'react';
import { anchor, box, button, text, grid, grommet, heading, icon, page, pageContent, textInput } from 'grommet-exp-theme';

var Anchor = forwardRef(function (_a, ref) {
    var disabled = _a.disabled, href = _a.href, rest = __rest(_a, ["disabled", "href"]);
    return (jsx("a", __assign({ className: anchor, ref: ref }, rest, { href: !disabled ? href : undefined })));
});
Anchor.displayName = 'Anchor';

var translatePad = function (pad) {
    var result = {};
    if (!pad)
        return result;
    if (typeof pad === 'string')
        result.pad = pad;
    if (typeof pad === 'object') {
        if (pad.horizontal)
            result.padHorizontal = pad.horizontal;
        if (pad.vertical)
            result.padVertical = pad.vertical;
        if (pad.top)
            result.padTop = pad.top;
        if (pad.bottom)
            result.padBottom = pad.bottom;
        if (pad.start)
            result.padStart = pad.start;
        if (pad.end)
            result.padEnd = pad.end;
    }
    return result;
};
var translateMargin = function (margin) {
    var result = {};
    if (!margin)
        return result;
    if (typeof margin === 'string')
        result.margin = margin;
    if (typeof margin === 'object') {
        if (margin.horizontal)
            result.marginHorizontal = margin.horizontal;
        if (margin.vertical)
            result.marginVertical = margin.vertical;
        if (margin.top)
            result.marginTop = margin.top;
        if (margin.bottom)
            result.marginBottom = margin.bottom;
        if (margin.start)
            result.marginStart = margin.start;
        if (margin.end)
            result.marginEnd = margin.end;
    }
    return result;
};

var Box = forwardRef(function (_a, ref) {
    var align = _a.align, as = _a.as, background = _a.background, border = _a.border, _b = _a.direction, direction = _b === void 0 ? "column" : _b, elevation = _a.elevation, flex = _a.flex, gap = _a.gap, height = _a.height, justify = _a.justify, margin = _a.margin, pad = _a.pad, round = _a.round, width = _a.width, wrap = _a.wrap, rest = __rest(_a, ["align", "as", "background", "border", "direction", "elevation", "flex", "gap", "height", "justify", "margin", "pad", "round", "width", "wrap"]);
    var Element = as || 'div';
    return (jsx(Element, __assign({ className: box(__assign(__assign(__assign({ align: align, background: background, border: border, direction: direction, elevation: elevation, flex: flex, gap: gap, height: height, justify: justify }, translateMargin(margin)), translatePad(pad)), { round: round, width: width, wrap: wrap })), ref: ref }, rest)));
});
Box.displayName = "Box";

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

var Card = forwardRef(function (_a, ref) {
    var _b = _a.elevation, elevation = _b === void 0 ? "medium" : _b, _c = _a.flex, flex = _c === void 0 ? false : _c, _d = _a.gap, gap = _d === void 0 ? "small" : _d, _e = _a.pad, pad = _e === void 0 ? "medium" : _e, _f = _a.round, round = _f === void 0 ? "large" : _f, rest = __rest(_a, ["elevation", "flex", "gap", "pad", "round"]);
    return (jsx(Box, __assign({ ref: ref, elevation: elevation, flex: flex, gap: gap, pad: pad, round: round }, rest)));
});
Card.displayName = "Card";

var Footer = forwardRef(function (_a, ref) {
    var _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.direction, direction = _c === void 0 ? "row" : _c, _d = _a.flex, flex = _d === void 0 ? false : _d, _e = _a.justify, justify = _e === void 0 ? "between" : _e, _f = _a.gap, gap = _f === void 0 ? "medium" : _f, rest = __rest(_a, ["align", "direction", "flex", "justify", "gap"]);
    return (jsx(Box, __assign({ as: "footer", ref: ref, align: align, direction: direction, flex: flex, gap: gap, justify: justify }, rest)));
});
Footer.displayName = "Footer";

var Form = forwardRef(function (_a, ref) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx(Box, __assign({ ref: ref, as: "form", gap: "small" }, rest, { children: children })));
});
Form.displayName = "Form";

var Text = forwardRef(function (_a, ref) {
    var as = _a.as, color = _a.color, levelProp = _a.level, size = _a.size, textAlign = _a.textAlign, weight = _a.weight, rest = __rest(_a, ["as", "color", "level", "size", "textAlign", "weight"]);
    var Element = as || "span";
    var level = !size ? levelProp : undefined;
    return (jsx(Element, __assign({ className: text({ color: color, level: level, size: size, textAlign: textAlign, weight: weight }), ref: ref }, rest)));
});
Text.displayName = "Text";

var FormField = forwardRef(function (_a, ref) {
    var children = _a.children, error = _a.error, help = _a.help, htmlFor = _a.htmlFor, info = _a.info, label = _a.label, name = _a.name, // ignored for now
    required = _a.required, rest = __rest(_a, ["children", "error", "help", "htmlFor", "info", "label", "name", "required"]);
    return (jsxs(Box, __assign({}, rest, { children: [label && (jsx("label", __assign({ className: text({ size: "xsmall", weight: "medium" }), htmlFor: htmlFor }, { children: label }))), help && jsx(Text, __assign({ size: "xsmall" }, { children: help })), children, help && jsx(Text, __assign({ size: "xsmall" }, { children: help })), error && jsx(Text, __assign({ size: "xsmall" }, { children: error }))] })));
});
FormField.displayName = "FormField";

var translateGap = function (gap) {
    var result = {};
    if (!gap)
        return result;
    if (typeof gap === "string")
        result.gap = gap;
    if (typeof gap === "object") {
        if (gap.column)
            result.gapColumn = gap.column;
        if (gap.row)
            result.gapRow = gap.row;
    }
    return result;
};
var Grid = forwardRef(function (_a, ref) {
    var as = _a.as, columns = _a.columns, gap = _a.gap, height = _a.height, _b = _a.margin, margin = _b === void 0 ? "none" : _b, _c = _a.pad, pad = _c === void 0 ? "none" : _c, width = _a.width, rest = __rest(_a, ["as", "columns", "gap", "height", "margin", "pad", "width"]);
    var Element = as || "div";
    return (jsx(Element, __assign({ className: grid(__assign(__assign(__assign(__assign(__assign({ columns: columns }, translateGap(gap)), { height: height }), translateMargin(margin)), translatePad(pad)), { width: width })), ref: ref }, rest)));
});
Grid.displayName = "Grid";

var Grommet = forwardRef(function (_a, ref) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: grommet, ref: ref }, rest, { children: children })));
});
Grommet.displayName = "Grommet";

var Header = forwardRef(function (_a, ref) {
    var _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.direction, direction = _c === void 0 ? "row" : _c, _d = _a.flex, flex = _d === void 0 ? false : _d, _e = _a.justify, justify = _e === void 0 ? "between" : _e, _f = _a.gap, gap = _f === void 0 ? "medium" : _f, rest = __rest(_a, ["align", "direction", "flex", "justify", "gap"]);
    return (jsx(Box, __assign({ as: "header", ref: ref, align: align, direction: direction, flex: flex, gap: gap, justify: justify }, rest)));
});
Header.displayName = "Header";

var Heading = forwardRef(function (_a, ref) {
    var children = _a.children, level = _a.level, rest = __rest(_a, ["children", "level"]);
    var Heading = function (_a) {
        var props = __rest(_a, []);
        return createElement("h".concat(level), __assign(__assign({}, props), { ref: ref }), children);
    };
    return jsx(Heading, __assign({ className: heading({ level: level }) }, rest));
});
Heading.displayName = "Heading";

var Icon = forwardRef(function (_a, ref) {
    var height = _a.height, size = _a.size, rest = __rest(_a, ["height", "size"]);
    return (jsx("img", __assign({ className: icon({ height: height, size: size }), ref: ref }, rest)));
});
Icon.displayName = "Icon";

var NameValueListContext = createContext({});

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

var Nav = forwardRef(function (_a, ref) {
    var _b = _a.flex, flex = _b === void 0 ? false : _b, _c = _a.gap, gap = _c === void 0 ? "medium" : _c, rest = __rest(_a, ["flex", "gap"]);
    return jsx(Box, __assign({ as: "nav", ref: ref, flex: flex, gap: gap }, rest));
});
Nav.displayName = "Nav";

var PageContext = createContext({});

var Page = forwardRef(function (_a, ref) {
    var kind = _a.kind, rest = __rest(_a, ["kind"]);
    return (jsx(PageContext.Provider, __assign({ value: { kind: kind } }, { children: jsx("div", __assign({ className: page, ref: ref }, rest)) })));
});
Page.displayName = "Page";

var PageContent = forwardRef(function (_a, ref) {
    var background = _a.background, fill = _a.fill, rest = __rest(_a, ["background", "fill"]);
    var kind = useContext(PageContext).kind;
    return (jsx(PageContext.Provider, __assign({ value: { kind: kind } }, { children: jsx("div", __assign({ className: pageContent({ background: background, kind: kind }), ref: ref }, rest)) })));
});
PageContent.displayName = "PageContent";

var Paragraph = forwardRef(function (_a, ref) {
    var color = _a.color, levelProp = _a.level, size = _a.size, rest = __rest(_a, ["color", "level", "size"]);
    var level = !size ? levelProp : undefined;
    return (jsx("p", __assign({ className: text({ color: color, level: level, size: size }), ref: ref }, rest)));
});
Paragraph.displayName = "Paragraph";

var PageHeader = forwardRef(function (_a, ref) {
    var parent = _a.parent, subtitle = _a.subtitle, title = _a.title, rest = __rest(_a, ["parent", "subtitle", "title"]);
    return (jsxs(Header, __assign({ ref: ref, align: "stretch", direction: "column", gap: "none", pad: { vertical: "medium" } }, rest, { children: [parent, jsx(Heading, __assign({ level: 1 }, { children: title })), subtitle && jsx(Paragraph, __assign({ level: 1 }, { children: subtitle }))] })));
});
PageHeader.displayName = "PageHeader";

var TextInput = forwardRef(function (props, ref) {
    return (jsx("input", __assign({ className: textInput, type: "text" }, props)));
});
TextInput.displayName = "TextInput";

export { Anchor, Box, Button, Card, Footer, Form, FormField, Grid, Grommet, Header, Heading, Icon, NameValueList, NameValueListContext, NameValuePair, Nav, Page, PageContent, PageContext, PageHeader, Paragraph, Text, TextInput };
