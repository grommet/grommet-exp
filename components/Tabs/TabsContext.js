import { createContext } from 'react';

const TabsContext = createContext({
    active: "",
    addLabel: (s) => { },
    removeLabel: (s) => { },
});

export { TabsContext };
