import { useRecoilState } from "recoil";
import { productState } from "../recoil/atoms";
import { useEffect } from "react";
import { fetchProducts } from "../axios/getProducts";

export default function Products() {
  const [products, setProducts] = useRecoilState(productState);

  useEffect(() => {
    async function fetchProductsData() {
      try {
        const response = await fetchProducts();

        const data = response.data;
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductsData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
