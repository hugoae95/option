export interface IProduct {
    id: number;
    title: string;
    image: string;
    sku?: string;
    price: number;
    barcode?: string | null;
    description: string;
}
export interface IProductReducer {
    data: IProduct[];
    allData: IProduct[];
}

export interface IProductAction {   
    type: string;
    data: any;
}