import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Grid, Header, Button } from "semantic-ui-react";
//actions
import * as actions from "../actions/userActions";
//components
import MyProjects from "./MyProjects";

const HomePage = props => {
  const handleLogout = ev => {
    localStorage.clear();
    props.logoutUser();
    props.history.push("/login");
  };

  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Header as="h1">{`Welcome, ${props.username}`}</Header>
        </Grid.Row>
        <Grid.Row>
          <MyProjects />
        </Grid.Row>
        <Grid.Row>
          <Button onClick={handleLogout}>logout</Button>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    username: state.currentUser.username
  };
};

export default withRouter(connect(mapStateToProps, actions)(HomePage));
