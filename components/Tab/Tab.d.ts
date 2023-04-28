/// <reference types="react" />
type TabProps = {
    children?: React.ReactNode;
    label?: string;
};
declare const Tab: {
    ({ children, label }: TabProps): import("react").ReactNode;
    displayName: string;
};
export { Tab };
