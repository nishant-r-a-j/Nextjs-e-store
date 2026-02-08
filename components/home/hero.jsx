import React from "react";
import styles from "@/app/styles/hero.module.css"
import Link from "next/link";
export default function Hero(){
    return (
        <>
            <div className={styles.herosection}>
                 <div className={styles.herodescription}>
                    <div className={styles.herofont}>One stop solution <a style={{color:"rgb(240, 5, 130)"}}> E store</a></div>
                    <div className={styles.herotexts}>
                    <a>Discover the latest headphones, earphones, mobiles, tablets etc.</a><br />
                    <a>Exclusive deal just for you!</a><br />
                    <Link href={"/store"}>
                    <button>Shop Now</button>
                    </Link>
                    </div>
                    </div>
            </div>
        </>
    )
}