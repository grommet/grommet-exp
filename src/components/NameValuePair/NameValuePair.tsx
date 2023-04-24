import { forwardRef, Fragment, useContext } from "react";
import { SpacingType } from "../types";
import { Box } from "../Box";
import { Text, TextAlignType } from "../Text";
import {
  NameValueListContext,
  NameValueListContextType,
} from "../NameValueList";

type NameValuePairProps = {
  children?: string | number | JSX.Element;
  name?: string | JSX.Element;
};

const NameValuePair = forwardRef<HTMLDivElement, NameValuePairProps>(
  (
    { children, name: nameProp, ...rest }: NameValuePairProps,
    ref
  ): JSX.Element => {
    const { nameProps, pairProps, valueProps } = useContext(
      NameValueListContext
    ) as NameValueListContextType;

    const direction = pairProps?.direction;

    const column = direction === "column" || direction === "column-reverse";

    const Container = column ? Box : Fragment;

    const nameAlign: TextAlignType = nameProps?.align;
    const valueAlign: TextAlignType = valueProps?.align;
    // using margin to act as gap
    // <dl> elements must only directly contain
    // properly-ordered <dt> and <dd> groups
    const valueGap: SpacingType = column ? { bottom: "xxsmall" } : undefined;

    let name;
    if (typeof nameProp === "string" || typeof nameProp === "number") {
      name = (
        <Text
          as="dt"
          margin={valueGap}
          textAlign={nameAlign}
          color="strong"
          weight="medium"
        >
          {nameProp}
        </Text>
      );
    } else
      name = (
        <Box as="dt" align={nameAlign}>
          {nameProp}
        </Box>
      );

    let value;
    if (typeof children === "string" || typeof children === "number")
      value = (
        // override browser default margin for dd
        <Text as="dd" margin="none" textAlign={valueAlign}>
          {children}
        </Text>
      );
    else
      value = (
        // override browser default margin for dd
        <Box margin="none" as="dd" align={valueAlign}>
          {children}
        </Box>
      );

    const first = direction !== "column-reverse" ? name : value;
    const second = direction !== "column-reverse" ? value : name;

    return (
      <Container>
        {first}
        {second}
      </Container>
    );
  }
);

NameValuePair.displayName = "NameValuePair";

export { NameValuePair };
