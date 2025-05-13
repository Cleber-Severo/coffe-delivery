export interface ICoffe {
	title: string;
	description: string;
	price: string;
	tags: string[];
	url: string;
	id?: number;
}

export interface ICartItem extends ICoffe {
	amount: number
}
