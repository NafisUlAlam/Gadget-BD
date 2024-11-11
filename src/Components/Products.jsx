import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import Nothing from "./Nothing";

const Products = () => {
  const data = useLoaderData();
  //console.log(Array.isArray(data));
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId && categoryId !== "All Products") {
      const filteredProds = [...data].filter(
        (product) => product.category === categoryId
      );
      setProducts(filteredProds);
    } else {
      setProducts(data);
    }
    //    console.log(filteredProds, data);
  }, [categoryId, data]);

  //console.log(products, "category", categoryId, data);
  return (
    <div
      className={`${
        products.length ? "grid" : "w-full"
      } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12`}
    >
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))
      ) : (
        <Nothing title={categoryId}></Nothing>
      )}
    </div>
  );
};

export default Products;
