export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Divider />
      <p className="text-center text-gray-400 uppercase">{children}</p>
      <Divider />
    </div>
  );
}

function Divider() {
  return <div className="h-[1px] w-8 bg-gray-400 opacity-50"></div>;
}
