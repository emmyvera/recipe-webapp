import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Recipe from '../components/Recipe'

import recipes from '../recipes'
import { listRecipes } from '../actions/recipeActions'

function HomeScreen(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listRecipes())
  }, [])

  return (
    <div>
      <h1>Popular Recipe</h1>
      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe._id} sm={12} md={6} lg={4} xl={3}>
            <Recipe recipe={recipe} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
