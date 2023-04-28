/// <reference types="react" />
type TabProps = {
    children: JSX.Element;
    label?: string;
};
declare const Tab: {
    ({ children, label }: TabProps): JSX.Element | null;
    displayName: string;
};
export { Tab };
