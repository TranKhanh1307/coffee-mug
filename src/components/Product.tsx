import clsx from "clsx";
import type { Product } from "../lib/definition";
import { formatCurrency } from "../lib/util";

export default function Product({
  mug,
  compact = false,
}: {
  mug: Product;
  compact?: boolean;
}) {
  return (
    <div>
      <a
        href="#"
        className={clsx(
          "group relative mx-auto block h-[540px] max-w-[460px] bg-cover bg-center bg-blend-darken transition-all duration-300 ease-in-out hover:bg-black/10",
          compact && "md:h-[380px] md:max-w-[300px]",
        )}
        style={{ backgroundImage: `url(${mug.imgUrl})` }}
      >
        <div className="absolute bottom-2 w-full scale-x-95 bg-white p-4 text-center uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
          Explore mug
        </div>
        {mug.discountPrice && (
          <div className="absolute top-2 right-2 bg-white p-2 text-amber-700">
            On Sale.
          </div>
        )}
      </a>
      <p className="mt-8 text-center text-xl">{mug.name}</p>
      <div className="mt-2 flex justify-center gap-2 text-lg">
        {mug.discountPrice && (
          <p className="font-semibold text-amber-700">
            {formatCurrency(mug.discountPrice)}
          </p>
        )}
        <p
          className={clsx("text-gray-400", mug.discountPrice && "line-through")}
        >
          {formatCurrency(mug.price)}
        </p>
      </div>
    </div>
  );
}
