import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./styled-components/Button";
import Search from "./Search";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    // Ref creation
    this.StickyNavbar = React.createRef();
  }

  componentDidMount() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
      myFunction();
    };

    // Get the navbar
    const navbar = this.StickyNavbar.current;

    // // Get the offset position of the navbar
    const sticky = navbar.offsetTop;

    // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add(`sticky`);
      } else {
        navbar.classList.remove(`sticky`);
      }
    }
  }

  render() {
    // const classes = useStyles();
    return (
      <>
        <NavWrapper
          className="navbar navbar-expand-sm navbar-dark px-sm-5"
          ref={this.StickyNavbar}
        >
          <Link to="/">
            <img src={logo} alt="commerce" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link
                to="/"
                className="nav-link"
                // Returns to home page by hard refresh
                onClick={() => window.location.reload(true)}
              >
                products
              </Link>
            </li>
          </ul>
          <Search />
          <Tooltip title="View saved favorites">
            <Link to="/favorites" className="ml-auto favoritesBtn">
              <ButtonContainer>
                <span className="mr-1">
                  <i className="fas fa-star" />
                </span>
                favorites
              </ButtonContainer>
            </Link>
          </Tooltip>
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
              <Tooltip title="Change to Light Theme">
                <i className="fas fa-sun sun" />
              </Tooltip>
            ) : (
              <Tooltip title="Change to Dark Theme">
                <i className="fas fa-moon moon" />
              </Tooltip>
            )}
          </div>
        </NavWrapper>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => window.location.reload(true)}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/favorites" className="nav-link">
                      Favorites
                    </Link>
                  </li>
                  <li>
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
                        <p className="a">Change to Light Theme</p>
                      ) : (
                        <p className="a">Change to Dark Theme</p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
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
