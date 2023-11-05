import {Category} from "../types/types";
import ItemCategories from "./ItemCategories";

export function ListOfCategories ({categories, allCategories}:{categories:Category[],allCategories:Category[]}) {
    return (
        <>
            {
                categories.map(value => {
                        return (
                               <ul className='menu' key={value.id}>
                                   {
                                    <ItemCategories categories={value} allCategories={allCategories}></ItemCategories>
                                   }
                               </ul>

                       )
                })
            }

        </>
    )
}

