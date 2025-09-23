import clsx from "clsx";

interface CardProps {
  imageUrl: string;
  hoverText: string;
  children: React.ReactNode;
  className?: string;
  overlay?: React.ReactNode;
}

export default function Card({
  imageUrl,
  hoverText,
  children,
  className,
  overlay,
}: CardProps) {
  return (
    <div>
      <a
        href="#"
        className={clsx(
          "group relative mx-auto block bg-cover bg-center bg-blend-darken transition-all duration-300 ease-in-out hover:bg-black/10",
          className,
        )}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute bottom-2 w-full scale-x-95 bg-white p-4 text-center uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
          {hoverText}
        </div>
        {overlay}
      </a>
      <div className="mt-8">{children}</div>
    </div>
  );
}
