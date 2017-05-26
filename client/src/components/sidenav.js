import React, {Component} from 'react'
import { Button, Modal, Nav, NavItem } from 'react-bootstrap'
import Pic from './modules/pic'
import Logo from '../img/Cactus_6.png'
import CreateEntry from './buttons/createEntryButton'
import DeleteEntry from './buttons/deleteBtn'
import Logout from './buttons/logoutButton'
import Menu from '../img/Cactus8_menuicon.png'
import $ from 'jquery'

class Sidebar extends Component {
	render() {
  	return (
    	<Modal className='Sidebar right' show={ this.props.isVisible } onHide={this.props.onHide}
      	 autoFocus keyboard
      >
      	<Modal.Header closeButton>
        	<Modal.Title className="Home-title"><img className="modal-logo" src={Logo} height="100rem;" alt="logo"/> Prickly Posts</Modal.Title>
          <br />
        </Modal.Header>
      	<Modal.Body>
      		{ this.props.children }
        </Modal.Body>
        <hr />
        <CreateEntry />
        <hr />
        <DeleteEntry />
        <hr />
        <Logout />
      </Modal>
    );
  }
}

class Sidenav extends Component {
	constructor(props, context) {
  	super(props, context);

  	this.state = {
      isVisible: false,
      instaShow: false
    };
  }

  updateModal(isVisible) {
  	this.state.isVisible = isVisible;
    this.state.instaShow = false;
    this.forceUpdate();
  }



	render() {
  	return (
    	<div className='Sidenav pull-right'>
      	<button onClick={ () => this.updateModal(true) } className="icon-btn-square"> <img className="icon" src={Menu} /></button>
        <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
        	<Nav>
          	<NavItem onClick={ () => this.setState({ instaShow: !this.state.instaShow })}>Recent Instagram Photos</NavItem>
              <div className={ this.state.instaShow ? '' : 'hidden' }>
                <Pic />
              </div>
          </Nav>
        </Sidebar>
      </div>
    );
  }
}

export default Sidenav
