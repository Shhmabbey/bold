import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import reviewsErrorsReducer from "./reviews_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reviews: reviewsErrorsReducer
});

export default errorsReducer;