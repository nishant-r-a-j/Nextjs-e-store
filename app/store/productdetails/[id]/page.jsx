import { getProducts } from "@/app/library";
import Productdetailsbox from "@/components/productdetialsbox";
import React from "react";


export default async function Productdetails({ params }) {
    const { id } = await params; // ✅ correct
    const prod = await getProducts(id);

    return (
        <>
            <Productdetailsbox product={prod} />
        </>
    );
}
