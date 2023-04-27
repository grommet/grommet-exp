/// <reference types="react" />
import { BoxProps } from "../Box";
type DropProps = {
    flush?: "top" | "bottom" | "left" | "right";
};
declare const Drop: import("react").ForwardRefExoticComponent<BoxProps & DropProps & import("react").RefAttributes<HTMLDivElement>>;
export { Drop };
