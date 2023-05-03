/// <reference types="react" />
interface Column {
    property?: string;
    header?: string;
    render?: (datum: Datum) => any;
}
interface Datum {
    [key: string]: any;
}
export declare const DataTable: ({ columns, data, }: {
    columns?: Column[] | undefined;
    data?: Datum[] | undefined;
}) => JSX.Element;
export {};
