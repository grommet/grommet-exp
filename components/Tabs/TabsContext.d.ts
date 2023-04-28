/// <reference types="react" />
export interface TabsContextType {
    active: string;
    addLabel: (label: string) => void;
    removeLabel: (label: string) => void;
}
export declare const TabsContext: import("react").Context<TabsContextType>;
