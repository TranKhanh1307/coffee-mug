import type { Product } from "../lib/definition";

export default function Product({ mug }: { mug: Product }) {
  return (
    <div>
      <div className="h-[380px]"></div>
      <a href="#" className="block text-center">
        {mug.name}
      </a>
      <p className="text-center">{mug.price}</p>
    </div>
  );
}
