import { atom } from "recoil";
import { Product } from "../types/productTypes";

export const productState = atom<Product[]>({
  key: "productState",
  default: []
});
