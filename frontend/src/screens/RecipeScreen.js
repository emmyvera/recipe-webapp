import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listRecipeDetails } from '../actions/recipeActions'

import recipes from '../recipes'

function RecipeScreen() {
  const dispatch = useDispatch()
  const recipeDetail = useSelector((state) => state.recipeDetails)
  const { error, loading, recipes } = recipeDetail
  let { id } = useParams()

  useEffect(() => {
    dispatch(listRecipeDetails(id))
  }, [dispatch])

  const recipe = recipes.find((r) => r._id === id)
  console.log(recipe.steps)
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={recipe.image} alt={recipe.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{recipe.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>Category: {recipe.category}</ListGroup.Item>

            <ListGroup.Item>Views: {recipe.views}</ListGroup.Item>

            <ListGroup.Item>Ingredient: {recipe.ingredient}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Steps</h3>
              <p></p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default RecipeScreen
