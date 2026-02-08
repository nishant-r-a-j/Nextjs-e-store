import { getProducts } from "@/app/library";
import Productdetailsbox from "@/components/productdetialsbox";
import React from "react";

export default async function Productdetails({params}){
    const data=await params;
    const prod=await getProducts(data.id);
    return (
        <>
        {/* <h1>{prod.title}</h1> */}
        <Productdetailsbox product={prod}></Productdetailsbox>
        </>
    )
}