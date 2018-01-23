import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions/userActions";
import { Form, Input, Button } from "semantic-ui-react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.signup
      ? this.props.signupUser(this.state, this.props.history)
      : this.props.loginUser(this.state, this.props.history);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <Input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder={
              this.props.signup ? "Choose a username" : "Enter your username"
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder={
              this.props.signup ? "Choose a password" : "Enter your password"
            }
            type={this.props.signup ? "text" : "password"}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
        {!this.props.signup ? (
          <Button onClick={() => this.props.history.push("/signup")}>
            Or Signup
          </Button>
        ) : null}
      </Form>
    );
  }
}

export default withRouter(connect(null, actions)(UserForm));
