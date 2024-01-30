import axios from "axios";
import { Product } from "../types/productTypes";

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
}
