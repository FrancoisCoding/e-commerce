import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Search from "./Search";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="commerce" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link
              to="/"
              className="nav-link"
              onClick={() => window.location.reload(true)}
            >
              products
            </Link>
          </li>
        </ul>
        <Search />
        <Link to="/favorites" className="ml-auto">
          <ButtonContainer>
            <span className="mr-1">
              <i className="fas fa-star" />
            </span>
            favorites
          </ButtonContainer>
        </Link>
        <div
          onClick={e =>
            this.props.setTheme(
              this.props.theme.mode === "dark"
                ? { mode: "light" }
                : { mode: "dark" }
            )
          }
        >
          {this.props.theme.mode === "dark" ? (
            <i className="fas fa-sun sun" />
          ) : (
            <i className="fas fa-moon moon" />
          )}
          {console.log(this.props.theme.mode)}
        </div>
        {/* <Link to="/cart">
          <ButtonContainer>
            <span className="mr-1">
              <i className="fas fa-shopping-cart" />
            </span>
            cart
          </ButtonContainer>
        </Link> */}
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainGreen);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
