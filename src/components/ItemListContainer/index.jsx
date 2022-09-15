import { useEffect, useState } from "react"
import ItemList from '../ItemList';
import data from '../mockData'

export function ItemListContainer (){

    const [proudctList, setProductList] = useState([])

    useEffect(()=>{
        getProducts.then((response)=>{
            setProductList(response);
        })
        .catch(error => console.log(error));
    }, []);
    
    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            }, 2000);
        });
    
    return <>
            <ItemList lista={proudctList}/>
           </>
    // <h1>{ greeting }</h1>
}
