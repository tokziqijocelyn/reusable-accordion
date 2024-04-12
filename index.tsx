import * as Component from "@radix-ui/react-accordion";
import React from "react";
import { ChevronDown } from "lucide-react";
import { LucideType } from "lucide-react";
import { cn } from "../accordion/lib/utils";
import "./global.css";

// We want to take in a few things, data, and style
type Props = {
  // data passed in to be an array
  data?: any;
  // only one can be opened at a time?
  single?: Boolean;
  // icon?: typeof LucideType;
  // I want to see if we can add icon as a prop 
};

// What kind of data can we see?
type data = {
  header: string;
  content: string;
};

//disabled style
const accordionVariants = cn("bg-header", {
  variants: {
    variant: {
      default: "text-contentText",
      disabled: "text-disabledText ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Accordion = (props: Props) => {
  return (
    <Component.Root
      type={props.single ? "single" : "multiple"}
      className="rounded-md "
      collapsible
    >
      {props.data.map((item: data) => {
        return (
          <AccordionItem key={item.header} value={item.header}>
            <AccordionTrigger>
              {/* props.icon && {props.icon} */}
              {item.header}
            </AccordionTrigger>

            <AccordionContent>
              <p>{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Component.Root>
  );
};

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Component.Item
      className={cn(
        "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
        className
      )}
      {...props}
      ref={forwardedRef}
      value={props.value}
    >
      {children}
    </Component.Item>
  )
);

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Component.Header className="flex">
    <Component.Trigger
      className={cn(
        "bg-header py-3 px-5 flex flex-row justify-between min-h-0 w-full group",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDown
        className="text-contentText ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Component.Trigger>
  </Component.Header>
));

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Component.Content
      className={cn(
        "bg-white p-1 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {/* Ensure flex container for horizontal layout */}
      <div className="flex items-center bg-yellow-300">
        {/* Simplified bg-contentBar styling */}
        <div className="bg-contentBar w-1 h-full rounded-full mr-2" />

        {/* Content area with overflow visible for long content */}
        <div className="py-[15px] px-5 ">{children}</div>
      </div>
    </Component.Content>
  )
);



export default Accordion;
