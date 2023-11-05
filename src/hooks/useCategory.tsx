import {useEffect, useState} from "react";
import {getCategory} from "../service/service";
import {Category, Product} from "../types/types";

export function useCategory({products}:{products:Product[]}){
    const [categories,setCategories]=useState<Category[]>([]);

    useEffect(()=>{
        getCategory(products).then(data=>{
          const newcategories:Record<string, Category>={};
            data.forEach(categories=>{
               categories.forEach((category,index)=>{
                 const {id}=category
                 const parent=categories[index-1] as Category | undefined;
                 const parentId=(parent?.id) ? parent?.id :null;
                 newcategories[id]={...category,parentId}
               })
          })
            setCategories(Object.values(newcategories));
        });
    },[products])


    return {categories};
}

