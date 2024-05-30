export type CartItems = Array<{
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}>

export type CartItem = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export type CartLocalStorage = Array<{
    id: number,
    quantity: number,
    checked: boolean,
}>

export type FilterState = 0 | 1;