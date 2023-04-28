import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { containerStyle } from 'grommet-exp-theme';

const Container = forwardRef((_a, ref) => {
    var { gridArea } = _a, rest = __rest(_a, ["gridArea"]);
    return (jsx("div", Object.assign({ className: containerStyle, ref: ref, style: { gridArea } }, rest)));
});
Container.displayName = "Container";

export { Container };
