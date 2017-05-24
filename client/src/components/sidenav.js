import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import Pic from './modules/pic'
import { Button, Modal, Nav, NavItem } from 'react-bootstrap'

class Sidebar extends React.Component {
	render() {
  	return (
    	<Modal className='Sidebar right' show={ this.props.isVisible } onHide={this.props.onHide}
      	 autoFocus keyboard
      >
      	<Modal.Header closeButton>
        	<Modal.Title>Style your Entry!</Modal.Title>
        </Modal.Header>
      	<Modal.Body>
      		{ this.props.children }
        </Modal.Body>
      </Modal>
    );
  }
}

class Sidenav extends React.Component {
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
      	<Button onClick={ () => this.updateModal(true) }><span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> </Button>
        <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
        	<Nav>
          	<NavItem onClick={ () => this.setState({ instaShow: !this.state.instaShow })}>Recent Instagram Photos</NavItem>
              <div className={ this.state.instaShow ? '' : 'hidden' }>
                <Pic />
              </div>
            <NavItem>Fonts</NavItem>
          </Nav>
        </Sidebar>
      </div>
    );
  }
}

export default Sidenav
