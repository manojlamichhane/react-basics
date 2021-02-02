import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  
import { Link } from 'react-router-dom'

class NavBar extends Component {
      
    state ={
       isOpen:false
    }
    toggle =() => {
        this.setState({
          ...this.state,
            isOpen:!this.state.isOpen
        })
    }
    
    render() {    
        return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
        <Link to="/" ><NavbarBrand href="/">React Basics</NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/posts"> <NavLink>Posts</NavLink> </Link>
              </NavItem> 
              <NavItem>
                <Link to="/users"> <NavLink>Users</NavLink> </Link>
              </NavItem>
              <NavItem>
                <Link to="/albums"> <NavLink>Albums</NavLink> </Link>
              </NavItem>
            </Nav>
          <NavbarText>Logout</NavbarText>
        </Collapse>
        </div>
      </Navbar>
    </div>
      );
  }
}

export default NavBar;