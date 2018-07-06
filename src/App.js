import React, { Component } from 'react';
import BG from "./img/background.jpg";
import styled from "styled-components";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello {'world'}</h1>
        <img src={BG} alt=""/>
      </React.Fragment>
    );
  }
}

export default App;
