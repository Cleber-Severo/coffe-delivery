export interface ICoffe {
	title: string;
	description: string;
	price: string;
	tags: string[];
	url: string;
	id: string;
  amount?: number;
}

export interface ICartItem extends ICoffe {
	amount: number
}
