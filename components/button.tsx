import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex w-fit items-center justify-center rounded-full border-2 font-normal uppercase transition-colors disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "border-primary text-primary hover:bg-primary hover:text-white",
        secondary:
          "border-secondary text-secondary hover:bg-secondary hover:text-white",
        white: "hover:text-primary border-white text-white hover:bg-white",
      },
      size: {
        default: "min-h-11 px-8 py-2 text-sm tracking-wide",
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
