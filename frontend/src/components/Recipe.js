import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/recipe/${recipe._id}`}>
        <Card.Img src={recipe.image} />
      </Link>

      <Card.Body>
        <Link to={`/recipe/${recipe._id}`}>
          <Card.Title as="div">
            <strong>{recipe.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3"></div>
        </Card.Text>

        <Card.Text as="h3">{recipe.views} Views</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Recipe;
