import type { Product as ProductType } from "../lib/definition";
import clsx from "clsx";
import { formatCurrency } from "../lib/util";
import Card from "./Card";

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
    <Card
      key={mug.name}
      imageUrl={mug.imgUrl}
      hoverText="Explore mug"
      className={clsx("h-[380px]", columns === 2 && "md:h-[540px]")}
      overlay={
        mug.discountPrice && (
          <div className="absolute top-2 right-2 bg-white p-2 text-amber-700">
            On Sale.
          </div>
        )
      }
    >
      <p className="text-center text-xl">{mug.name}</p>
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
    </Card>
  );
}
