import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions/projectActions";
import { Header } from "semantic-ui-react";

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.showProject(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <Header as="h1">{this.props.project.title}</Header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { project: state.currentProject };
};

export default withRouter(connect(mapStateToProps, actions)(ProjectShow));
