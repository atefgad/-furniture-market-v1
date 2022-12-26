import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Animated, Hemlet } from "../../components";

const Profile = () => {
  return (
    <Hemlet title="Profile">
      <Animated>
        <Container>
          <Row className="account__page__container">
            <Col lg="12" md="12" className="">
              <h5 className="mb-3">Edit your account information</h5>
              <Form>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="first name"
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder="last name"
                  />
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone number"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="email address"
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder="street address"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="City"
                  />

                  <input
                    className="form-control"
                    type="number"
                    placeholder="Postal code"
                  />

                  <input
                    className="form-control"
                    type="text"
                    placeholder="Country"
                  />
                </FormGroup>

                <div className="text-end">
                  <button className="btn btn-primary" type="submit">
                    Save Changes
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Animated>
    </Hemlet>
  );
};

export default Profile;
