import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: HeadingProps) {
  return <h1 className={cn("heading-xl", className)}>{children}</h1>;
}

export function H2({ children, className }: HeadingProps) {
  return <h2 className={cn("heading-lg", className)}>{children}</h2>;
}

export function H3({ children, className }: HeadingProps) {
  return <h3 className={cn("heading-md", className)}>{children}</h3>;
}

export function H4({ children, className }: HeadingProps) {
  return <h4 className={cn("heading-sm", className)}>{children}</h4>;
}
