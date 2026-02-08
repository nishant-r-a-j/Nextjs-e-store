import React from "react";
import Storecompcont from "./storecompcontainer";
import { getCategories, getProducts } from "../library";
import ProductBox from "@/components/productbox";
import Catbox from "@/components/catbox";

export default async function StorePage() {
  const categories = await getCategories();
  const products = await getProducts();

  const categoryListJSX = categories.map((cat, idx) => <Catbox key={idx}>{cat}</Catbox>);
  const productListJSX = products.map((prod) => <ProductBox key={prod.id} product={prod} />);

  return (
    <Storecompcont category={categoryListJSX} product={productListJSX} />
  );
}
