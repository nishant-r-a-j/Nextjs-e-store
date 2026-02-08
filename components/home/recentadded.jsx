"use client"
import React, { use, useEffect, useState } from "react";
import styles from "@/app/styles/recentlyadded.module.css"
import ProductBox from "../productbox";
export default function RecentAdded(){

    const [products,setProducts]=useState([]);

    const getProducts= async ()=>{
        const response= await fetch('https://fakestoreapi.com/products?limit=5');
        const data= await response.json();
         setProducts(data)
    }

        useEffect(
            ()=>{
                getProducts();
            },[]
        )


    return (
        <>
        <div className={styles.container}>
             <h1 className={styles.head}>
                <a>Recently Added Products</a>
                </h1>
             <div className={styles.boxcontainer}>
               {products.map((prod)=>{    
               return  <ProductBox key={prod.id} product={prod}></ProductBox>
                    }
               )
            }
             </div>
        </div>
        </>
    )
}