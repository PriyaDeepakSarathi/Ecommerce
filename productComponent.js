import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Button, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductComponent = (props) => {
  console.log(props.product);
  const products = props.product;
  // const products = useSelector((state) => state.allProducts.products);
  /* const products = useSelector((state) => state.selectedProducts); */
  /* const renderList=products.map((product)=>{
        const{id,title,image,price,description}=product; */

  const [read, setRead] = useState(false);

  const linkName = read ? "less " : "...more ";

  return (
    <div>
      <Container>
        <Row>
          {products.length > 0 &&
            products.map((product) => {
              const {
                id,
                title,
                image,
                description,
                price,
                category,
              } = product;
              return (
                <Col key={id} xs={12} sm={6} md={4} lg={3} className="item">
                  {/* <Link to={`/product/${id}`}> */}
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

                      <Button variant="primary" class="space evently">
                        Buy
                      </Button>
                      {""}
                      <Button variant="warning">${price}</Button>
                    </Card.Body>
                  </Card>
                  {/* </Link> */}
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};
export default ProductComponent;
