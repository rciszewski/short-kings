import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "../categories/category.types";

export const setCategoriesMap = (categoriesMap) => {
  console.log(
    createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap)
  );
  return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
};
