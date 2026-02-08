// app/store/storecompcontainer.jsx
import React from "react";
import styles from "@/app/styles/storecompcont.module.css";

export default function Storecompcont({ children }) {
  return <div className={styles.storecontainer}>{children}</div>;
}
