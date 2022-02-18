import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'

import recipes from '../recipes'

function RecipeScreen() {
  let { id } = useParams()
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
