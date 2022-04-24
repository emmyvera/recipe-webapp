import axios from 'axios'
import {
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_LIST_FAIL,
} from '../constants/recipeConstants'

export const listRecipes = () => async (dispatch) => {
  try {
    dispatch({ type: RECIPE_LIST_REQUEST })

    const { data } = await axios.get('http://127.0.0.1:8000/api/recipe')

    dispatch({
      type: RECIPE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RECIPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}