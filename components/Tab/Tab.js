import { useContext, useEffect } from 'react';
import '../Tabs/index.js';
import { TabsContext } from '../Tabs/TabsContext.js';

const Tab = ({ children, label = 'Tab' }) => {
    const { active, addLabel, removeLabel } = useContext(TabsContext);
    useEffect(() => addLabel(label), [label]);
    if (active === label)
        return children;
    return null;
};
Tab.displayName = "Tab";

export { Tab };
