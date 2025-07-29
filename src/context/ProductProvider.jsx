import { useState,useEffect } from "react";
import fetching from "../util/api";
import {ProductContext} from "./ProductContext";

export function ProductProvider({children}){
    const [products,setProducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await fetching();
            setProducts(data);
        }
        fetchData();
    },[]);

    return(
        <ProductContext.Provider value={{products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}