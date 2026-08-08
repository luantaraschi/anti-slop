import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * shadcn's button, reworked for this product: the theme's radius and colors,
 * the ledger type scale, one named transition, and only the two variants the
 * ledger actually uses. The stock ghost, link, and destructive variants were
 * removed rather than left in place unused.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-control font-body text-note transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-paper/40 dark:focus-visible:ring-offset-ink disabled:pointer-events-none disabled:cursor-default disabled:opacity-50",
  {
    variants: {
      // Every variant answers hover with a pressed state as well: hover does
      // not exist on a touchscreen, so without `active:` the control says
      // nothing back until the page itself changes.
      variant: {
        solid:
          "bg-ink text-paper hover:bg-ink/90 active:bg-ink/75 dark:bg-paper dark:text-ink dark:hover:bg-paper/90 dark:active:bg-paper/75",
        quiet:
          "border border-rule bg-paper text-ink hover:border-ink/40 active:bg-ink/5 dark:border-rule/25 dark:bg-ink dark:text-paper dark:hover:border-paper/40 dark:active:bg-paper/10",
      },
      size: {
        row: "h-7 px-2.5",
        control: "h-9 px-4",
        // The drawing is 20px; the target is the 40px square the pseudo-element
        // centres on it, which costs nothing in layout.
        icon: "relative size-5 after:absolute after:left-1/2 after:top-1/2 after:size-10 after:-translate-x-1/2 after:-translate-y-1/2",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "control",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
