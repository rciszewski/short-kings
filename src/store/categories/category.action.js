import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "../categories/category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategories = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
