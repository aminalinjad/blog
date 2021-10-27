import {Button, Form} from "react-bootstrap";

const LoginComponent = () => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter UserName"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password"/>
      </Form.Group>

      <div className={'text-center w-100 my-5'}>
        <Button variant={'outline-danger'}>Submit</Button>
      </div>
    </div>
  );
};

export default LoginComponent;