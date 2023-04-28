/// <reference types="react" />
type ContainerProps = {
    children?: JSX.Element;
    gridArea?: string;
};
declare const Container: import("react").ForwardRefExoticComponent<ContainerProps & import("react").RefAttributes<HTMLDivElement>>;
export { Container, ContainerProps };
