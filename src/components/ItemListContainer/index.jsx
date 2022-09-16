import { useEffect, useState } from "react"
import ItemList from '../ItemList/index';
import {data} from '../Data/index';

export function ItemListContainer (){

    const [productList, setProductList] = useState([])

    useEffect(()=>{
        getProducts.then((response)=>{
            setProductList(response);
        })
        .catch(error => console.log(error));
    },[]);
    
    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            }, 2000);
        });
    
    return <>
            <ItemList lista={productList}/>
           </>
    // <h1>{ greeting }</h1>
}
