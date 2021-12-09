import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';


import './Header.css';


import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Header = props => {
    let links = null;
    if (props.token === null) {
        links = (
            <Nav navbar>


                <NavItem>
                    <NavLink exact to="/login" className="NavLink navlink ">Login</NavLink>
                </NavItem>




            </Nav>
        )
    } else {
        links = (
            <Nav className="mr-md-6">
                <NavItem>
                    <NavLink exact to="/home" className="NavLink navlink ">Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink exact to="/burger-builder" className="NavLink navlink ">Burger Builder</NavLink>
                </NavItem>


                <NavItem>
                    <NavLink exact to="/orders-history" className="NavLink navlink">Orders History</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/logout" className="NavLink">Logout</NavLink>
                </NavItem>
            </Nav>
        )
    }
    return (
        <div className="Navigation">
            <Navbar dark color="dark" expand="sm" >
                <div className="container">
                    <NavbarBrand href="/">
                        <img src={Logo} alt="Logo" width="60px" />
                    </NavbarBrand>
                    {links}
                </div>
            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header);