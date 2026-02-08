import React, { Children } from "react";
import styles from "@/app/styles/homecompcont.module.css";
export default function Homecomponentcontainer({children}){
    return(
        <div className={styles.homecompblock}>
            {children}
        </div>
    )
}