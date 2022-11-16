import React from "react";
import Card from "react-bootstrap/Card";

export default function Cards(props) {
  return (
    <div className="container mt-3">
      <div className="row d-flex p-2 justify-content-center align-items-center">
        {props.data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body className="d-flex-column align-items-start">
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>{element.email}</Card.Text>
                  <Card.Text>{element.phone}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}
