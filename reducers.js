import { combineReducers } from "redux";
import {
  ProductReducer,
  SelectedReducer,
  DetailReducer,
} from "./reducer/productReducer";

const Reducers = combineReducers({
  allProducts: ProductReducer,
  selectedProducts: SelectedReducer,
  detailProducts: DetailReducer,
});

export default Reducers;
