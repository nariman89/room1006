import React, { Component } from "react";
import { Button, Form, FormGroup, Control, Text } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Form>
          <FormGroup controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </FormGroup>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
