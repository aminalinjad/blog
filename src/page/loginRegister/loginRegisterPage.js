import {Card, Col, Container, Tab, Tabs} from "react-bootstrap"
import LoginComponent from "../../components/login/loginComponent"
import RegisterComponent from "../../components/register/registerComponent"

const LoginRegisterPage = () => {
  return (
    <div className={'my-5'}>
      <Container>
        <Col lg={5} className={'mx-auto'}>
          <Card>
            <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className="mb-3 justify-content-center pt-3">
              <Tab eventKey="Login" title="Login" className={'px-4'}>
                <LoginComponent/>
              </Tab>
              <Tab eventKey="Register" title="Register" className={'px-4'}>
                <RegisterComponent/>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Container>


    </div>
  );
};

export default LoginRegisterPage;