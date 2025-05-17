export interface ICoffe {
	title: string;
	description: string;
	price: string;
	tags: string[];
	url: string;
	id?: number;
  amount?: number;
}

export interface ICartItem extends ICoffe {
	amount: number
}
