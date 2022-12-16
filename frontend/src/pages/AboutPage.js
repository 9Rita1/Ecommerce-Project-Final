import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const AboutPage = () => {
  return (
    <>
      <FormContainer>
        <h1>About Page</h1>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>My Ecommerce Site</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              This Is My First Small Ecommerce Electronics Store Project
            </ListGroup.Item>
            <ListGroup.Item>
              I'm a fullstack student and this is my mern stack project
            </ListGroup.Item>
            <ListGroup.Item>Stay In Touch:</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://he-il.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
              Facebook
            </Card.Link>
            <Card.Link href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter"></i>
              Twitter
            </Card.Link>
            <Card.Link href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
              Instagram
            </Card.Link>
          </Card.Body>
        </Card>
      </FormContainer>
    </>
  );
};

export default AboutPage;
