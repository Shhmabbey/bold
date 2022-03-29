import { combineReducers } from "redux";

import categoryReducer from "./categories_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  categories: categoryReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;