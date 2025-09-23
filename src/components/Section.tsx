import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export default function Section({ title, children, className }: SectionProps) {
  return (
    <section className={twMerge("mx-auto max-w-[940px] px-4", className)}>
      {title && (
        <SectionTitle className={title && "mb-32"}>{title}</SectionTitle>
      )}
      {children}
    </section>
  );
}

function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge("flex items-center justify-center gap-4", className)}
    >
      <Divider />
      <h2 className="text-center text-gray-400 uppercase">{children}</h2>
      <Divider />
    </div>
  );
}

function Divider() {
  return <div className="h-[1px] w-8 bg-gray-400 opacity-50"></div>;
}
