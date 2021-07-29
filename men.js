import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./productComponent";
import { SelectedProducts } from "./reducer/action";
import axios from "axios";
import { SetProducts } from "./reducer/action.js";
const Men = () => {
  const products = useSelector((state) => state.allProducts.products);
  const selectedProducts = useSelector(
    (state) => state.selectedProducts.products || []
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(SetProducts(response.data));
    dispatch(SelectedProducts(response.data, "men's clothing"));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  console.log("sel:", selectedProducts.products);
  return (
    <div>
      <ProductComponent product={selectedProducts} />
    </div>
  );
};
export default Men;
