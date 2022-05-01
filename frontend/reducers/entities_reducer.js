import { combineReducers } from "redux";

import cartProductReducer from "./cart_products_reducer";
import cartReducer from "./cart_reducer";
import categoryReducer from "./categories_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  categories: categoryReducer,
  reviews: reviewsReducer,
  cart: cartReducer,
  cartProducts: cartProductReducer
});

export default entitiesReducer;