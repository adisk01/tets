import React from "react";
import Card from "react-bootstrap/Card";
var dp=require("../../images/1007129816_e794419615.jpg");
const TestimonialCard = () => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={dp} />
      <Card.Body>
        <Card.Title>John Doe</Card.Title>
        <Card.Text>
          I loved this course and Nupium Academy helped me a lot to gain knowledge.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default TestimonialCard;