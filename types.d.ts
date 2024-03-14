type MouseTouchEvent<T extends HTMLElement> = MouseEvent<T> | TouchEvent<T>;

type T_cartPizza = {
	id?: number;
	origin_id: number;
	cart_id?: string;
	title: string;
	image: string;
	blur: string;
	price: number;
	count: number;
	activeSize: string;
	activeDough: string;
	activePrice: number;
};

type T_cartPizzas = T_cartPizza[];

type T_pizza = {
	id: number;
	origin_id: number;
	title: string;
	categories: string[];
	image: string;
	blur: string;
	prices: number[];
	counts: number[];
	doughs: string[];
	sizes: string[];
	activeDough: string;
	activePrice: number;
	totalPrice: number;
};

type T_pizzas = T_pizza[];

type CardInfoProps = {
	image: string;
	blur: string;
	title: string;
};

type ParamsButtonProps = {
	children: React.ReactNode;
	title: string;
	idx: number;
	styles: string;
};

type PriceTagProps = {
	activePrice: number;
	prices: number[];
};

type OptionProps = {
	children: React.ReactNode;
	value: string;
};

type StrongProps = {
	children: React.ReactNode;
	value: number | string;
};

interface sliderState {
	isMouseDown: boolean;
	startX: number;
	scrollLeft: number;
	mouseMoveX: number;
}

type activateSliderPayload = {
	startX: number;
	scrollLeft: number;
};

type setProductsPayload = {
	menu: T_pizzas;
	cart: T_cartPizzas;
}

interface productsState {
	menuProducts: T_pizzas;
	cartProducts: T_cartPizzas;
	activeCategory: string;
	activeSort: string;
}

type T_total = {
	count: number;
	price: number;
};
