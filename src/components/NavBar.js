import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from "styled-components";
import ButtonContainer from './Button';

import { ProductConsumer } from '../context';


export default class NavBar extends Component {

    render() {

        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/ProductList" className="nav-link">Products</Link></li>
                    {/*<li className="nav-item"><Link to="/ProductList" className="nav-link">Gowns</Link></li>
                    <li className="nav-item"><Link to="/ProductList" className="nav-link">Dresses</Link></li>
        <li className="nav-item"><Link to="/ProductList" className="nav-link">Lucknowi</Link></li>*/}
                    <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    
    background: var(--mainBeige);
    .nav-link{
        margin: 1rem;
        color:var(--darkBeige)!important;
        font-size: 1.1rem;
        text-transform: none;
        
    }
    .nav-link:hover{
        border-bottom: 1px solid;
        border-color: var(--darkBeige);
    }
`;
