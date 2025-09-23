import type { Product as ProductType } from "../lib/definition";
import clsx from "clsx";
import { formatCurrency } from "../lib/util";

interface ProductListProps {
  products: ProductType[];
  columns?: number;
}

export default function ProductList({
  products,
  columns = 2,
}: ProductListProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  }[columns];

  return (
    <div className={`grid gap-y-24 md:gap-x-4 ${gridCols}`}>
      {products.map((p) => (
        <Product key={p.name} mug={p} columns={columns} />
      ))}
    </div>
  );
}

function Product({ mug, columns }: { mug: ProductType; columns: number }) {
  return (
    <div>
      <a
        href="#"
        className={clsx(
          "group relative mx-auto block h-[380px] bg-cover bg-center bg-blend-darken transition-all duration-300 ease-in-out hover:bg-black/10",
          columns === 2 && "md:h-[540px]", //Taller image when there is only 2 columns on desktop screen
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
