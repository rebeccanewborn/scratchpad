import React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//components
import NewProject from "./NewProject";

class MyProjects extends React.Component {
  handleClick = ev => {
    this.props.history.push(`/projects/${ev.target.id}`);
  };

  render() {
    const projects = this.props.projects
      ? this.props.projects.map(proj => {
          return (
            <li key={proj.created_at} id={proj.id} onClick={this.handleClick}>
              {proj.title}
            </li>
          );
        })
      : null;
    return (
      <Segment>
        <NewProject />
        <ul>{projects}</ul>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.currentUser.projects };
};
export default withRouter(connect(mapStateToProps)(MyProjects));
