import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Recipe from '../components/Recipe'

//import recipes from '../recipes'
import { listRecipes } from '../actions/recipeActions'
import { Loader } from '../components/Loader'

function HomeScreen(props) {
  const dispatch = useDispatch()
  const recipeList = useSelector((state) => state.recipeList)
  const { error, loading, recipes } = recipeList

  useEffect(() => {
    dispatch(listRecipes())
  }, [dispatch])

  return (
    <div>
      <h1>Latest Recipe</h1>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {recipes.map((recipe) => (
            <Col key={recipe._id} sm={12} md={6} lg={4} xl={3}>
              <Recipe recipe={recipe} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default HomeScreen
