
import './App.css'
import {ListOfCategories} from "./components/ListOfCategories";
import {useProducts} from "./hooks/useProducts";
import { ProductCmp} from "./components/ProductCmp";
import {useCategory} from "./hooks/useCategory";
import {Button} from "@mui/material";
function App() {
 const {products,loading}=useProducts({category:''});
 const {categories}=useCategory({products});
/* const data:Category[]=[
     {
      id:'1',
      name:'padre1',
      parentId:null
     },
     {
         id:'2',
         name:'padre2',
         parentId:null
     },
     {
         id:'3',
         name:'padre3',
         parentId:null
     },
     {
         id:'4',
         name:'child-1-1',
         parentId:'1'
     },
     {
         id:'5',
         name:'child-1-2',
         parentId:'1'
     },
     {
         id:'6',
         name:'child-1-1-1',
         parentId:'4'
     },
     {
         id:'7',
         name:'child-2-1',
         parentId:'2'
     },{
         id:'8',
         name:'child-2-2',
         parentId:'2'
     },{
         id:'9',
         name:'child-2-2-1',
         parentId:'8'
     },
     ,{
         id:'10',
         name:'child-2-2-1-1',
         parentId:'9'
     }
 ];*/

 const parents= categories.filter(value => !value?.parentId);


 /*const recursive = (node) => {
     const childs=data.filter(value => value?.parentId===node.id)
    if (childs!=null){
        childs.forEach(value => {
            recursive(value);
        })

    }
     return node;
 }
    parents.forEach(value => {

      recursive(value);
    })*/

  return (
    <>

        <h1 >Test</h1>
        <header>
            <Button variant="contained">Hello world</Button>
        </header>
        <aside>
          <ListOfCategories categories={parents} allCategories={categories}></ListOfCategories>
        </aside>

        {loading && <p>Loading data</p>}
       <main>
          {<ProductCmp products={products}></ProductCmp>}
       </main>
    </>
  )
}

export default App
