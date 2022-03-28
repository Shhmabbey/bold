import * as CategoryApiUtil from '../util/category_util'

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveAllCategories = (categories) => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});
export const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});

export const fetchAllCategories = () => dispatch => {
  return CategoryApiUtil.fetchAllCategories()
    .then(categories => dispatch(receiveAllCategories(categories)))
}
export const fetchCategory = (categoryId) => dispatch => {
  return CategoryApiUtil.fetchCategory(categoryId)
    .then(category => dispatch(receiveCategory(category)))
}
