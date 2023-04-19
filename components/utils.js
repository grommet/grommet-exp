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

export { translateMargin, translatePad };
//# sourceMappingURL=utils.js.map
