import api from "../api";

export type GetResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  amount?: number;
};

type GetProps = {
  filter?: string | undefined;
};

export const getProducts = async ({ filter }: GetProps) => {
  try {
    const { data } = await api.get(
      filter ? `products/category/${filter}` : `products`
    );
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
