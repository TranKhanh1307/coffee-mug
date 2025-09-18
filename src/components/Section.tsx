import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-32">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Divider />
      <h2 className="text-center text-gray-400 uppercase">{children}</h2>
      <Divider />
    </div>
  );
}

function Divider() {
  return <div className="h-[1px] w-8 bg-gray-400 opacity-50"></div>;
}
