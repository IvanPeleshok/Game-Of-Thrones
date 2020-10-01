import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Technology = styled.ul`
  color: #fff;
  li {
    margin-right: 20px;
    font-size: 18px;
    list-style-type: none;
    cursor: printer;
  }
`;

const TitleMainPage = styled.h2`
  color: #fff;
  font-size: 25px;
`;

export default class MainPage extends Component {
  render() {
    return (
      <>
        <TitleMainPage>Thecnology used in this project:</TitleMainPage>
        <Technology>
          <li>
            <Link to="!#">HTML5</Link>
          </li>
          <li>
            <Link to="!#">CSS3</Link>
          </li>
          <li>
            <Link to="!#">JS ES6+</Link>
          </li>
          <li>
            <Link to="!#">ReactJS</Link>
          </li>
        </Technology>
      </>
    );
  }
}
