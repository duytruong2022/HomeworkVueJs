export interface IProduct {
    id: string;
    img: Array<string>;
    name: string;
    code: string;
    category: string;
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

export interface ICategory {
    id: string;
    name: string;
    quantity: number;
    selected: boolean;
}
export interface IPrice {
    id: string;
    min: number;
    max: number;
    quantity: number;
    selected: boolean;
}

export interface IListCategory {
    title: string;
    listCategorys?: Array<ICategory>;
}

export interface IListPrices {
    title: string;
    listPrices?: Array<IPrice>;
}

export interface IColor {
    title: string;
    colors?: Array<string>;
}

export interface IFilterName {
    title: string;
    num: number;
    listCategorys?: Array<ICategory>;
    listPrices?: Array<IPrice>;
}

export interface IListFilter {
    category: IListCategory;
    price: IListPrices;
    color: IColor;
    filterName: IFilterName;
}

export interface ICustomerInfo {
    customerCountry: string;
    customerState: string;
    customerZip: string;
    shipping: boolean;
}
