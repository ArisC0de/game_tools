import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'coming-inline-flex coming-items-center coming-justify-center coming-whitespace-nowrap coming-rounded-md coming-text-sm coming-font-medium coming-transition-colors focus-visible:coming-outline-none focus-visible:coming-ring-1 focus-visible:coming-ring-ring disabled:coming-pointer-events-none disabled:coming-opacity-50',
  {
    variants: {
      variant: {
        default:
          'coming-bg-primary coming-text-primary-foreground coming-shadow hover:coming-bg-primary/90',
        destructive:
          'coming-bg-destructive coming-text-destructive-foreground coming-shadow-sm hover:coming-bg-destructive/90',
        outline:
          'coming-border coming-border-input coming-bg-background coming-shadow-sm hover:coming-bg-accent hover:coming-text-accent-foreground',
        secondary:
          'coming-bg-secondary coming-text-secondary-foreground coming-shadow-sm hover:coming-bg-secondary/80',
        ghost: 'hover:coming-bg-accent hover:coming-text-accent-foreground',
        link: 'coming-text-primary coming-underline-offset-4 hover:coming-underline',
      },
      size: {
        default: 'coming-h-9 coming-px-4 coming-py-2',
        sm: 'coming-h-8 coming-rounded-md coming-px-3 coming-text-xs',
        lg: 'coming-h-10 coming-rounded-md coming-px-8',
        icon: 'coming-h-9 coming-w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
