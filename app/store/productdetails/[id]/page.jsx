import { getProducts } from "@/app/library";
import Productdetailsbox from "@/components/productdetialsbox";
import React from "react";

export const dynamic = "force-dynamic"; // ✅ REQUIRED

export default async function Productdetails({ params }) {
    const { id } = await params; // ✅ correct
    const prod = await getProducts(id);

    return (
        <>
            <Productdetailsbox product={prod} />
        </>
    );
}
