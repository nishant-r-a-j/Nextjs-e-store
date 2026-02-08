import React from "react";
import styles from "@/app/styles/productdetbox.module.css"
export default function Productdetails({product}){
    return (
        <>
           <div className={styles.productdetcont}>
            <div className={styles.imgcont}>
             <img  src={product.image} alt="pimg" />
            </div>
            <div className={styles.details}>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>Price: {product.price}</h2>
                <h2>Rating: {product.rating.rate}</h2>
                 <h2>Category: {product.category}</h2>
                 <button>Add to cart</button>
            </div>
           </div>
        </>
    )
}