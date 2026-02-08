import React from "react";
import styles from "@/app/styles/catbox.module.css"
export default function Catbox({children}){
    return (
        <>
        <div className={styles.catbox}>
            {children}
        </div>
        </>
    )
}