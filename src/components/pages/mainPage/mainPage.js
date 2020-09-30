import React, { Component } from "react";
import styled from "styled-components";

const Technology = styled.ul`
  color: #fff;
  li {
    margin-right: 20px;
    font-size: 18px;
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
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JS ES6+</li>
          <li>ReactJS</li>
        </Technology>
      </>
    );
  }
}
