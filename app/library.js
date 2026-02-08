const getProducts = async (product_id=null) => {
    let API="https://fakestoreapi.com/products";
    if(product_id!=null){
       API += `/${product_id}`;

    }
  const res = await fetch(API, {
    cache: 'no-store', // SSR on every request
  });

  return res.json();
};

const getCategories = async () => {
  const products = await getProducts();
  return [...new Set(products.map(p => p.category))];
};

export { getProducts, getCategories };