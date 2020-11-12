import React from "react";
import ReactModal from "react-modal";
import { bool, func, shape, string } from "prop-types";

import {
  Action,
  Actionbar,
  Avatar,
  Container,
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  PageSubtitle,
  PageTitle,
  Separator,
  TextBlock,
  color,
} from "interviewjs-styleguide";

export default class IntervieweeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { interviewee } = this.props;
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.handleClose}
        role="dialog"
        style={{ overlay: { background: color.shadowM } }}
      >
        <Modal {...this.props}>
          <ModalHead>
            <Container align="center">
              <Avatar image={interviewee.avatar} size="h" />
              <Separator size="s" silent />
              <PageTitle typo="h1">{interviewee.name}</PageTitle>
              <Separator size="x" silent />
              <PageSubtitle typo="p2">{interviewee.title}</PageSubtitle>
            </Container>
          </ModalHead>
          <ModalBody>
            <Container align="left">
              <TextBlock typo="p2">{interviewee.bio}</TextBlock>
            </Container>
          </ModalBody>
          <ModalFoot>
            <Actionbar>
              <Action primary fixed onClick={this.props.handleSubmit}>
                {this.props.cta}
              </Action>
            </Actionbar>
          </ModalFoot>
        </Modal>
      </ReactModal>
    );
  }
}

IntervieweeModal.propTypes = {
  handleSubmit: func.isRequired,
  handleClose: func.isRequired,
  isOpen: bool.isRequired,
  interviewee: shape({
    avatar: string,
    name: string,
  }).isRequired,
  cta: string,
};

IntervieweeModal.defaultProps = {
  cta: "Start chatting",
};
