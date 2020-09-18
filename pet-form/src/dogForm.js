import React from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import Logo from './zenva-academy'

class DogForm extends React.Component {

    render() {
        return (
          <>
            <br />
            <Container>
              <Row>
                <Col md={{ span: 7, offset: 3 }}>
                  <Jumbotron>
                    <p>
                      Are you or your pet new to our app? Please fill out this
                      simple form with as much of your information as you can
                      provide, and it will be sent directly to us in preparation
                      for your first appointment
                    </p>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <h2>DOG INFORMATION</h2>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="input"
                          value={name}
                          placeholder="Name"
                          onChange={this.setName}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBirth">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridBreed">
                          <Form.Label>Breed</Form.Label>
                          <Form.Control
                            as="select"
                            value={breed}
                            onChange={this.setBreed}
                          >
                            <option>Choose...</option>
                            <option>Affenpinscher</option>
                            <option>Akita</option>
                            <option>American Bulldog</option>
                            <option>Terrier</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridColor">
                          <Form.Label>Color</Form.Label>
                          <Form.Control placeholder="Enter Color" />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridSex">
                          <Form.Label>Sex</Form.Label>
                          <Form.Check
                            type="radio"
                            label="Male"
                            name="formHoriRadios"
                            ids="formHoriRadios1"
                          />
                          <Form.Check
                            type="radio"
                            label="Female"
                            name="formHoriRadios"
                            ids="formHoriRadios1"
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAltered">
                          <Form.Label>Altered</Form.Label>
                          <Form.Check
                            type="radio"
                            label="Yes"
                            name="formHoriRadios2"
                            ids="formHoriRadios2"
                          />
                          <Form.Check
                            type="radio"
                            label="No"
                            name="formHoriRadios2"
                            ids="formHoriRadios2"
                          />
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </Jumbotron>
                </Col>
              </Row>
            </Container>
          </>
        );
    }
}

export default DogForm