import React, { Component } from "react";
import styled from "styled-components";
import "react-bootstrap";
import Grid from "react-bootstrap/lib/Grid";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";

const url = process.env.PUBLIC_URL + '/img/background.jpg'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  opacity: 0.8;
  background-color: #242424;
`;

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`;

const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>
      </React.Fragment>
    );
  }
}

export default App;
