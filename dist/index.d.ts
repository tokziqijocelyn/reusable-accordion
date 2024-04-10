import * as react_jsx_runtime from 'react/jsx-runtime';

type Props = {
    data?: any;
    single?: SingleOrMultiple;
};
declare enum SingleOrMultiple {
    Single = "single",
    Multiple = "multiple"
}
declare const Accordion: (props: Props) => react_jsx_runtime.JSX.Element;

export { Accordion as default };
