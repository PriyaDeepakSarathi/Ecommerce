import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { SetProducts } from "./reducer/action.js";
import { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./productComponent";
import { SelectedProducts } from "./reducer/action";
import SelectedComponent from "./selected";

function Products() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(SetProducts(response.data));
    dispatch(SelectedProducts(products, "jewelery"));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      {/*     <button onClick={() => dispatch(SelectedProducts(products, "jewelery"))}>
        jewellery
      </button> */}

      <ProductComponent product={products} />
      {/* <SelectedComponent /> */}
    </div>
  );
}
export default Products;
