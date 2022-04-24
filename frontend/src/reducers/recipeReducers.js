import {
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_LIST_FAIL,
} from '../constants/recipeConstants'

export const recipeListReducers = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case RECIPE_LIST_REQUEST:
      return { loading: true, recipes: [] }

    case RECIPE_LIST_SUCCESS:
      return { loading: false, recipes: action.payload }

    case RECIPE_LIST_FAIL:
      return { loading: true, error: action.payload }

    default:
      return state
  }
}
