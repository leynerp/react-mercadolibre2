import{PRODUCT_API,SELLER_ID} from '../config/config'
import {Product} from "../types/types";
export const  getProduct=async ({category}:{category:string})=>  {
    const url=new URL(`${PRODUCT_API}/sites/MLA/search`);
    url.searchParams.append('seller_id',SELLER_ID);
    if (category)
    url.searchParams.append('category',category);
    return fetch(url)
        .then(res=>res.json() as Promise<{results:Product[]}>)
        .then(res=>{
            return res.results;
        })
}

export const getCategory=async (products:Product[])=>{

    const idCategories=Array.from(new Set(products.map(product=>product.category_id)));

    const categoriesList= await Promise.all(
        idCategories.map(idCategory=> fetch(`https://api.mercadolibre.com/categories/${idCategory}`)
            .then(resp=>resp.json() as Promise<{path_from_root:{id:string,name:string}[]}>)
            .then(resp=>resp.path_from_root)
        )
    );
    return categoriesList;
}
