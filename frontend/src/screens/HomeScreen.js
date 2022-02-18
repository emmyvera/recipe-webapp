import React from "react";
import { Row, Col } from "react-bootstrap";
import Recipe from "../components/Recipe";

import recipes from "../recipes";

function HomeScreen(props) {
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
  );
}

export default HomeScreen;
