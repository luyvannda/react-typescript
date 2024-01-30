import { useRecoilState } from "recoil";
import { productState } from "../recoil/atoms";
import { useEffect } from "react";
import { fetchProducts } from "../axios/getProducts";

export default function Products() {
  const [products, setProducts] = useRecoilState(productState);

  useEffect(() => {
    async function fetchProductsData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductsData();
  }, [setProducts]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.image} alt="product image" />
          </div>

          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
