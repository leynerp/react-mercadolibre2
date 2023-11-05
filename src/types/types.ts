export interface Product {
    id:string;
    title:string;
    permalink:String;
    category_id:string;
    thumbnail:string;
    price:number;
    currency_id:string
}

export interface Category {
    id:string;
    name:string;
    parentId:string | null;
}