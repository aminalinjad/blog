import React from 'react';
import {Button, Form} from "react-bootstrap";

const RegisterComponent = () => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter FullName"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter UserName"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="reset-password">
        <Form.Label>Reset Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password Again"/>
      </Form.Group>

      <div className={'text-center w-100 my-5'}>
        <Button variant={'outline-danger'}>Submit</Button>
      </div>
    </div>
  );
};

export default RegisterComponent;