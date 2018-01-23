import React from "react";
import { Modal, Form, Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions/projectActions";

class NewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.createProject(this.state.title, this.props.userId);
    this.setState({ title: "", modalOpen: false });
  };

  render() {
    return (
      <Modal
        trigger={<p onClick={this.handleOpen}>Create a new project</p>}
        onClose={this.handleClose}
        open={this.state.modalOpen}
      >
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Input
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Give your project a title..."
              fluid
            />
            <Button type="submit">Create Project</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.currentUser.id };
};

export default connect(mapStateToProps, actions)(NewProject);
