export interface IProduct {
    id: string;
    img: Array<string>;
    name: string;
    code: string;
    description: string;
    realPrice: number;
    salePrice: number;
    CPU: string;
    Featured: string;
    IOPorts: string;
    specifications: Array<string>;
    colors: Array<string>;
    isSock: boolean;
    rating: string;
    reviews: number;
}

export interface ICartItem {
    // id: number;
    id: string;
    quantity: number;
    image?: string;
    description?: string;
    price: number;
    subtotal: number;
}
