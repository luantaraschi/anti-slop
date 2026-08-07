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
  "inline-flex items-center justify-center rounded-control font-body text-note transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-ink text-paper hover:bg-ink/90",
        quiet: "border border-rule bg-paper text-ink hover:border-ink/40",
      },
      size: {
        row: "h-7 px-2.5",
        control: "h-9 px-4",
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
