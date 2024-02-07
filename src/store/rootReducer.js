import { combineReducers } from "redux";
import themeSlices from "./slices/ThemeSlices";

const rootReducer = combineReducers({
  theme: themeSlices,
});

export default rootReducer;
