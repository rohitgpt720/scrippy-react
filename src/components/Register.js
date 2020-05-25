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

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    loading: false,
    errors: [],
    usersRef: firebase.database().ref("users"),
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser) => {
          console.log(createdUser);
          createdUser.user
            .updateProfile({
              displayName: this.state.username,
            })
            .then(() => {
              this.saveUser(createdUser).then(() => {
                console.log("user saved");
              });
            })
            .catch((err) => {
              console.error(err);
              this.setState({
                errors: this.state.errors.concat(err),
                loading: false,
              });
            });
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

  saveUser = (createdUser) => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
    });
  };

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
    } = this.state;

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
                <span>Register to Scrippy</span>
              </FormHeading>
              <StyledInput
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
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
              <StyledInput
                type="password"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                value={passwordConfirmation}
                onChange={this.handleChange}
              />

              {errors.length > 0 && (
                <StyledError>{this.displayErrors(errors)}</StyledError>
              )}
              <StyledButton type="submit">Submit!</StyledButton>
              <BottomPart>
                <span>Already a user?</span>
                <Link to="/login"> Login</Link>
              </BottomPart>
            </StyledForm>
          </StyledFormWrapper>
        </Container>
      </Layout>
    );
  }
}

export default Register;
