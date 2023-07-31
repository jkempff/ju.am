"use client";
import { cn } from "@ju/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

export const activeLinkVariants = cva(
  "p-4 text-xs text-center font-medium text-muted-foreground underline-offset-4 hover:underline",
  {
    variants: {
      isActive: {
        false: "",
        true: "font-semibold underline text-accent-foreground",
      },
    },
  }
);

export interface ActiveLinkProps
  extends ComponentProps<typeof Link>,
    VariantProps<typeof activeLinkVariants> {
  exactMatch?: boolean;
}

const ActiveLink = React.forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ className, href, exactMatch, children, ...props }, ref) => {
    const pathname = usePathname();

    const url = typeof href === "string" ? href : href.toString();
    const isActive = exactMatch ? pathname === url : pathname.startsWith(url);

    return (
      <Link
        href={href}
        className={cn(activeLinkVariants({ isActive }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

ActiveLink.displayName = "ActiveLink";

export { ActiveLink };
