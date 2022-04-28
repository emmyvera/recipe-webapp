import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  recipeListReducers,
  recipeDetailsReducers,
} from './reducers/recipeReducers'

const reducer = combineReducers({
  recipeList: recipeListReducers,
  recipeDetails: recipeDetailsReducers,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
