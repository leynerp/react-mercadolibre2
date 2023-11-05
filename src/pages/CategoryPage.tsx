import {ProductCmp} from "../components/ProductCmp";
import {useProducts} from "../hooks/useProducts";
import {useParams} from "react-router-dom";

export function CategoryPage(){
    const {category}=useParams();
    console.log(category);
    const {products}=useProducts({category});
    return (
        <ProductCmp products={products}></ProductCmp>
    )
}