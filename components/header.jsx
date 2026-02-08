import React from "react";
import styles from "@/app/styles/header.module.css"
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

export default function Header(){
    return (
        <>
          <header> 
            <div className={styles.headerContainer}>

                <div className={styles.logoContainer}>
                  Estore.
                </div>

                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Search for products..." />
                    <div className={styles.searchIconcontainer}>
                    <IoIosSearch />
                    </div>
                </div>

                <div className={styles.headeMenu}>
                  <div className={styles.menuBlocks}>
                    <Link href={"/"}>Home</Link>
                  </div>
                   <div className={styles.menuBlocks}>
                    <Link href={"/store"}>Store</Link>
                   </div>
                    <div className={styles.menuBlocks}>
                    <CiShoppingCart size={24} />
                    <div className={styles.bagCount}>
                      <a href="">3</a>
                    </div>
                    </div>
                </div>
            </div>
          </header> 
        </>
    )
}