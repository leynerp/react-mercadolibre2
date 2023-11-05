import {Product} from "../types/types";

interface Prop{
    products:Product[]
}
export function ProductCmp({products}:Prop) {
    return (
        <>
            <ul className='products'>
                {
                    products.map(({id,title,thumbnail,price,currency_id:currencyId})=>{return (
                        <li className='products' key={id}>
                            <img src={thumbnail}/>
                            <p> {title}</p>
                            <strong> {price.toLocaleString('es-AR',{style: "currency", currency:currencyId})}</strong>
                        </li>
                    )})
                }
            </ul>
        </>
    )
}