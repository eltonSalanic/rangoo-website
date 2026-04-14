import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  ariaLabel: string;
  id?: string;
  className?: string;
};

export default function PageSection({
  children,
  ariaLabel,
  id,
  className,
}: PageSectionProps) {
  const sectionClassName = [
    "section bg-brown-dark px-8 md:px-20 py-20",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName} aria-label={ariaLabel}>
      {children}
    </section>
  );
}
