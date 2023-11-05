import {Category} from "../types/types";
import {ListOfCategories} from "./ListOfCategories";
import {useState} from "react";
import {Link} from "react-router-dom";


const ItemCategories = ({categories, allCategories}:{categories:Category,allCategories:Category[]}) => {
    const child=allCategories.filter(categ => categ.parentId==categories.id );
    const [expanded,setExpanded]=useState(false);
    const handlerExpanded = () => {
      setExpanded(!expanded);
    }
    return (
        <>
            <li>

                {child.length>0 && <button onClick={handlerExpanded} type='button'>{expanded ? '-' : '+'}</button> }
                <Link to={`/${categories.id}`}> {categories.name}</Link>
                {(child.length>0 && expanded) && <ListOfCategories categories={child} allCategories={allCategories}></ListOfCategories> }
            </li>

        </>
    );
};

export default ItemCategories;