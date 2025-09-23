export interface Product {
  imgUrl: string;
  name: string;
  price: number;
  discountPrice?: number;
}

export interface Story {
  title: string;
  summary: string;
  date: string;
  thumbnail: string;
  content: string;
}

export interface Link {
  href: string;
  label: string;
}
