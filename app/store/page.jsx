import React from "react";
import Storecompcont from "./storecompcontainer";
import { getCategories, getProducts } from "../library";
import ProductBox from "@/components/productbox";
import Catbox from "@/components/catbox";

export default async function StorePage(){
    return (
        <>
        <Storecompcont category={<Categorylisting/>} product={<Productlisting/>}>
        </Storecompcont>
        </>
    )
}

const Categorylisting=async()=>{
    const data=await getCategories();
    // return new Error("something went wrong");
    return (
        <>
        <>{
            data.map((cat,idx)=>{
                return <Catbox key={idx}>{cat}</Catbox>
            })
            }</>
        </>
    )
}
const Productlisting=async()=>{
    const data=await getProducts();
      return (
        <>
        <>{
            data.map((prod)=>{
                return  <ProductBox key={prod.id} product={prod}></ProductBox>
            })
            }</>
        </>
    )
}