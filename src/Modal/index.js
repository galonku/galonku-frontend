import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Alert extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
      return (
        <Modal
          trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
        >
          <Header icon='browser' content='Cookies policy' />
          <Modal.Content>
            <h3>{this.props.message}</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Ok
            </Button>
          </Modal.Actions>
        </Modal>
      )
    }
}

Alert.propTypes = {
  message: PropTypes.any
}