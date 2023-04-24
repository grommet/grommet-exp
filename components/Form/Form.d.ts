/// <reference types="react" />
/// <reference types="react" />
import { BoxProps } from "../Box";
type FormProps = {
    children?: JSX.Element | JSX.Element[];
};
declare const Form: import("react").ForwardRefExoticComponent<FormProps & BoxProps & import("react").RefAttributes<HTMLDivElement>>;
export { Form };
