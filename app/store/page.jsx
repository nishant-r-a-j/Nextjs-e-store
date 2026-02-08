// app/store/page.jsx
import React from "react";
import Storecompcont from "./storecompcontainer";
import { getCategories, getProducts } from "../library";
import ProductBox from "@/components/productbox";
import Catbox from "@/components/catbox";
import styles from "@/app/styles/storecompcont.module.css"

export default async function StorePage() {
  // Fetch data first
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <Storecompcont>
      <div className={styles.catcontainer}>
        {/* Category Section */}
        {categories.map((cat, idx) => (
          <Catbox key={idx}>{cat}</Catbox>
        ))}
      </div>

      <div className={styles.productcont}>
        {/* Product Section */}
        {products.map((prod) => (
          <ProductBox key={prod.id} product={prod} />
        ))}
      </div>
    </Storecompcont>
  );
}
