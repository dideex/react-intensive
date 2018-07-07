import React, { Component } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import Link from "./Link";

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 49px;
`;

// Header component;
class Header extends Component {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <nav>
            <List>
              <Link link={"#"} text="Link #1" />
              <Link link={"#"} text="Link #2" />
              <Link link={"#"} text="Link #3" />
              <Link link={"#"} text="Link #4" />
              <Link link={"#"} text="Link #5" />
              <Link link={"#"} text="Link #6" />
              <Link link={"#"} text="Link #7" />
            </List>
          </nav>
        </Col>
      </Row>
    );
  }
}

export default Header;
