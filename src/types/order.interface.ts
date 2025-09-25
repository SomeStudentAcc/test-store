export interface IProductOrder {
  productId: number;
  quantity: number;
}

export interface IOrder {
  id: number;
  userId: number;
  date: string; // ISO string format
  products: IProductOrder[];
}


export interface IOrderTable {
  name: string;
  quantity: number;
  category: string;
  image: string
  username: string;
}
