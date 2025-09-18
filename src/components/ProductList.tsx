import Product from "./Product";
import type { Product as ProductType } from "../lib/definition";

interface ProductListProps {
  products: ProductType[];
  compact?: boolean;
  columns?: number;
}

export default function ProductList({
  products,
  compact = false,
  columns = 2,
}: ProductListProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  }[columns];

  return (
    <div className={`grid gap-y-24 md:gap-x-4 ${gridCols}`}>
      {products.map((p) => (
        <Product key={p.name} mug={p} compact={compact} />
      ))}
    </div>
  );
}
