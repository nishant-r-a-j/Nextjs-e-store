import styles from "@/app/styles/featuredproduct.module.css"
import ProductBox from "../productbox";


export default async function FeaturedProduct(){
    const response= await fetch('https://fakestoreapi.com/products?limit=5');
    const data=await response.json();
    return (
        <>
         <div className={styles.container}>
                     <h1 className={styles.head}>
                        <a>Featured Products</a>
                        </h1>
                     <div className={styles.boxcontainer}>
                       {data.map((prod)=>{    
                       return  <ProductBox key={prod.id} product={prod}></ProductBox>
                            }
                       )
                    }
                     </div>
                </div>
        </>
    )
}