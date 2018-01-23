import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../actions";

//components
import UserForm from "../components/UserForm";
import HomePage from "../components/HomePage";
import ProjectShow from "../components/ProjectShow";

class ScratchpadContainer extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.loadCurrentUser(token);
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <Switch>
        <Route path="/login" render={() => <UserForm signup={false} />} />
        <Route path="/signup" render={() => <UserForm signup={true} />} />
        <Route path="/home" component={HomePage} />
        <Route path="/projects/:id" component={ProjectShow} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapping state to props", state);
  return { currentUser: state.currentUser };
};

export default withRouter(
  connect(mapStateToProps, actions)(ScratchpadContainer)
);
