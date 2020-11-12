import React from "react";
import ReactModal from "react-modal";
import { bool, func, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Container,
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  PageTitle,
  Text
} from "interviewjs-styleguide";

export default class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleClose}
        role="dialog"
      >
        <Modal {...this.props}>
          <ModalHead>
            <PageTitle typo="h2">Sure to delete this story?</PageTitle>
          </ModalHead>
          <ModalBody>
            <Container align="center">
              <Text typo="p2">
                Are you sure you want to delete this story?{" "}
                <strong>“{this.props.story.title}”</strong> will be deleted. Do
                you really want to proceed?
              </Text>
            </Container>
          </ModalBody>
          <ModalFoot>
            <Actionbar>
              <Action primary fixed onClick={this.props.handleClose}>
                Cancel
              </Action>
              <Action
                secondary
                tone="negative"
                fixed
                onClick={this.props.deleteStory}
              >
                Delete
              </Action>
            </Actionbar>
          </ModalFoot>
        </Modal>
      </ReactModal>
    );
  }
}

DeleteModal.propTypes = {
  handleClose: func.isRequired,
  isOpen: bool.isRequired,
  deleteStory: func.isRequired,
  story: shape({
    title: string.isRequired
  }).isRequired
};

DeleteModal.defaultProps = {};
