import React from "react";
import styles from "@/app/styles/storecompcont.module.css";

export default async function Storecompcont({category,product}){
    return (
        <div className={styles.storecontainer}>
            <div className={styles.catcontainer}>
                {category}
            </div>
            <div className={styles.productcont}>
                {product}
            </div>
        </div>
    )
}