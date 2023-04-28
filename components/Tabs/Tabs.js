import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useCallback, useMemo } from 'react';
import { tabsHeader, tabsButton } from 'grommet-exp-theme';
import '../Box/index.js';
import { TabsContext } from './TabsContext.js';
import { Box } from '../Box/Box.js';

const Tabs = forwardRef((_a, ref) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    const [labels, setLabels] = useState([]);
    const [active, setActive] = useState("");
    const addLabel = useCallback((label) => {
        setLabels((prev) => {
            if (prev.includes(label))
                return prev;
            return [...prev, label];
        });
        setActive((prev) => {
            if (prev)
                return prev;
            return label;
        });
    }, []);
    const removeLabel = useCallback((label) => {
        setLabels((prev) => {
            if (!prev.includes(label))
                return prev;
            return prev.filter((l) => l !== label);
        });
    }, []);
    const contextValue = useMemo(() => ({ active, addLabel, removeLabel }), [active]);
    return (jsx(TabsContext.Provider, Object.assign({ value: contextValue }, { children: jsxs(Box, Object.assign({ ref: ref }, rest, { children: [jsx(Box, Object.assign({ as: "header", className: tabsHeader, direction: "row", justify: "start" }, { children: labels.map((label) => (jsx("button", Object.assign({ className: tabsButton({ selected: active === label }), onClick: () => setActive(label) }, { children: label }), label))) })), children] })) })));
});
Tabs.displayName = "Tabs";

export { Tabs };
