import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Ecom.css";
import Products from "./products";
import NavHead from "./Nav";
import ProductComponent from "./productComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedComponent from "./selected";
// import Details from "./Details";
import Jewellery from "./Jewellery";
import Women from "./women";
import Men from "./men";
import Electronics from "./Jewellery";

import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
function App() {
  return (
    <div>
      <NavHead />
      <Router>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/Jewellery" component={Jewellery} />
          <Route exact path="/womensWear" component={Women} />
          <Route exact path="/MensWear" component={Men} />
          <Route exact path="/Electronics" component={Electronics} />
          {/* <Route path="/product/productId" component={Details} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
