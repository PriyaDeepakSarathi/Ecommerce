import React, { useEffect } from "react";
import { useParams } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetDetails } from "./reducer/action";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { SetProducts } from "./reducer/action.js";
const Details = () => {
  const products = useSelector((state) => state.allProducts.products);
  const productDetail = useSelector((state) => state.detailProducts);
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();

  const fetchDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(SetProducts(response.data));
    dispatch(SetDetails(response.data));
    console.log(products);
  };

  useEffect(() => {
    // if (productId && productId !== "")
    fetchDetails();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {/*  const {(id, title, image, description, category)} = productDetail; */}
          return (
          {/* <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={productDetail.image}
              style={{ width: "18rem", height: "18rem" }}
            />
            <Card.Body>
              <Card.Title>{productDetail.title}</Card.Title>
              <Card.Text>
                {productDetail.description}
                <button> Add Cart</button>
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card> */}
          <h1>hi</h1> );
        </Row>
      </Container>
    </div>
  );
};

export default Details;
