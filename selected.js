import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectedProducts } from "./reducer/action";
import { SetProducts } from "./reducer/action";
import { useEffect } from "react";
import axios from "axios";

const SelectedComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const selectedProducts = useSelector(
    (state) => state.selectedProducts.products
  );

  const dispatch = useDispatch();
  const [read, setRead] = useState(false);

  /* const getData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(SetProducts(response.data));
    dispatch(SelectedProducts(response.data, "jewelery"));
  };*/
  /* useEffect(() => {
    dispatch(SelectedProducts(products, "jewelery"));
  }); */

  const linkName = read ? "less " : "...more ";

  return (
    <div>
      <Container>
        <Row>
          {selectedProducts.map((select) => {
            const { id, title, image, description, category } = select;
            return (
              <Col key={id} xs={12} sm={6} md={4} lg={3} className="item">
                <Card style={{ width: "20rem" /* height: "40rem" */ }}>
                  <Card.Img
                    variant="top"
                    src={image}
                    style={{ width: "18rem", height: "18rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      {read ? (
                        <p>{description}</p>
                      ) : (
                        <p>{description.slice(0, 50)}</p>
                      )}
                      <button onClick={(e) => setRead(!read)}>
                        {linkName}
                      </button>
                    </Card.Text>
                    <Button variant="primary">Buy</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default SelectedComponent;
