import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-normal rounded-full uppercase w-fit items-center justify-center transition-colors disabled:pointer-events-none border-2",
  {
    variants: {
      variant: {
        primary:
          "hover:bg-primary border-primary hover:text-white text-primary",
        secondary:
          "hover:bg-secondary border-secondary hover:text-white text-secondary",
        white: "hover:bg-white border-white text-white hover:text-primary",
      },
      size: {
        default: "min-h-11 py-2 px-8 text-sm tracking-wide",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
