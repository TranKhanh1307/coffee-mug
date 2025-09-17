import type { Product } from "./definition";

export const featuredMugs: Product[] = [
  {
    imgUrl:
      "https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg",
    name: "Pink Premium Ceramic",
    price: 99,
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a25acecdfd6_jakub-dziubak-394720-unsplash.jpg",
    name: "Golden Designers Mug",
    price: 69,
    discountPrice: 50,
  },
];

export const allProducts: Product[] = [
  {
    imgUrl:
      "https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6173ece01a_trent-erwin-570303-unsplash.jpg",
    name: "Red Love Cup",
    price: 37,
    discountPrice: 25,
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a0c09ece01c_steve-harvey-523112-unsplash.jpg",
    name: "Black Tea Cup",
    price: 15,
    discountPrice: 29,
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a223decdff8_ronaldo-arthur-vidal-66241-unsplash.jpg",
    name: "B&W Essentials Mug",
    price: 19,
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8461ece016_nathan-dumlao-643391-unsplash.jpg",
    name: "No Handle Bar Cup",
    price: 34,
  },
  ...featuredMugs,
];
