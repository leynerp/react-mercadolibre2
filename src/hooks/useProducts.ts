import {useEffect, useState} from "react";
import {getProduct} from "../service/service";
import {Product} from "../types/types";

export function useProducts({category}:{category:string}) {
  const [products,setProducts]=useState<Product[]>([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');
  useEffect(()=>{
      try{
          setLoading(true);
           getProduct({category}).then(result=>{
            if(result!==undefined)
            setProducts(result);
           });
      }catch (e) {
          setError(e.message);
      }finally {
           setLoading(false);
      }
  },[])

  return {products,loading,error};

}