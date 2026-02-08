import React from "react";
import styles from "@/app/styles/productbox.module.css"
import Link from "next/link";
export default function ProductBox({product}){
    return (
        <>
        <Link href={"/store/productdetails/"+  product.id}>
        <div className={styles.pbox}>
        {/* <h1>{product.id}</h1>
        <h1>{product.title}</h1>
        <a>{product.category}</a>
         <a>{product.price}</a> */}

        <div className={styles.imgcont}>
             <img  src={product.image} alt="pimg" />
        </div>
        <div className={styles.tcont}>
        <h1>{product.title}</h1>
        </div>
          <h4>Price: $ {product.price}</h4><br />
          <h4>Rating: {product.rating.rate}</h4>
          <button>Shop</button>
        </div>
        </Link>
        </>
    )
}