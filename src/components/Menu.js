import React, { Component } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import PropTypes from "prop-types";

const Repair = styled.div`
  color: #464646;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
`;

const WorkTime = styled.div`
  color: #2a2a2a
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;
  address {
    color: #464646
    display: block;
    font-size: 21px;
    font-weight: 700;
  }
  a {
    color: #464646
    display: block;
    font-size: 21px;
    font-weight: 700;
  }
`;

const CallButton = styled.button`
  width: 176px;
  height: 48px;
  background: #3fc7db;
  color: #fff;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  border: none;
`;

class Address extends Component {
  static propTypes = {
    addr: PropTypes.string.isRequired
  };
  render() {
    return <address>{this.props.addr}</address>;
  }
}

class Phone extends Component {
  static propTypes = {
    tel: PropTypes.string.isRequired
  };
  render() {
    return <a href={`tel:+${this.props.tel}`}>{this.props.tel}</a>;
  }
}

// Menu component;
class Menu extends Component {
  static propTypes = {};

  render() {
    return (
      <Row>
        <Col lg={3}>
          <Repair>Ремонт айфотов в сервисном центре и на выезде</Repair>{" "}
        </Col>
        <Col lg={3} lgOffset={1}>
          <WorkTime>
            Пн-Вт с 10 до 20, сб, вс
            <Address addr="Ленинская 301" />
          </WorkTime>
        </Col>
        <Col lg={3}>
          <WorkTime>
            звонки принимаются 24 часа
            <Phone tel="8 (891) 89 06 03" />
          </WorkTime>
        </Col>
        <Col lg={2}>
          <CallButton>Заказать звонок</CallButton>
        </Col>
      </Row>
    );
  }
}

export default Menu;
