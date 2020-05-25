import React from "react";
import { Link } from "react-router-dom";

//styled components
import Layout from "../components/layout";
import { Container } from "../styles/globalStyles";
import {
  StyledFormWrapper,
  StyledForm,
  FormHeading,
  StyledInput,
  StyledButton,
  StyledError,
  BottomPart,
} from "../styles/formStyles";

import firebase from "../firebase";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: [],
    usersRef: firebase.database().ref("users"),
  };

  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((signedInUser) => {
          console.log(signedInUser);
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false,
          });
        });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <Layout>
        <Container>
          <StyledFormWrapper
            animate={{
              // y: 0,
              opacity: 1,
            }}
            initial={{
              // y: -40,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <StyledForm onSubmit={this.handleSubmit}>
              <FormHeading>
                <span>Login to Scrippy</span>
              </FormHeading>
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              {errors.length > 0 && (
                <StyledError>{this.displayErrors(errors)}</StyledError>
              )}
              <StyledButton type="submit">Submit!</StyledButton>
              <BottomPart>
                <span>Don't have an account?</span>
                <Link to="/login"> Register</Link>
              </BottomPart>
            </StyledForm>
          </StyledFormWrapper>
        </Container>
      </Layout>
    );
  }
}

export default Login;
