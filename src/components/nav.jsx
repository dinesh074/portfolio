import React from "react";
import { Link } from "react-router-dom";
import { Navbar,NavbarBrand,NavItem ,Nav} from "reactstrap";
function Navb(){
    return(
        <Navbar dark color='' className='bg-dark'>
            <NavbarBrand>
            <Link to="/">MyPortfolio</Link> </NavbarBrand>

            <Nav className='mr-0'>
            <NavItem className='m-1'>
                <Link to='/'>
                    Home
                </Link>
            </NavItem>
                <NavItem className='m-1'>
                <Link to='/about'>
                    About
                </Link>
            </NavItem>

            <NavItem className='m-1'>
                <Link to='/contact'>
                    Contact
                </Link>
            </NavItem>
            </Nav>

        </Navbar>
    );
}
export default Navb;