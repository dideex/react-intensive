import React, { Component } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

const Repair = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  span {
    font-size: 24px;
    display: block;
    line-height: 30px;
  }
`

const LightText = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  margin-top: 54px;
`

const CallBtn = styled.button`
  width: 247px;
  height 67px;
  margin-top: 32px;
  background: #ffa14b;
  color: #fff;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  border: none;
`

// Main component;
class Main extends Component {

  render() {
    return <Row>
      <Col lg={5}>
        <Repair>
          Качественный ремонт
          <span>iphone за 35 минут</span>
        </Repair>
        <LightText>
          Оставьте заявку на бесплатную диагнустику без очереди..
        </LightText>
        <CallBtn>
          Отправить заявку!
        </CallBtn>
      </Col>
      <Col lg={6} lgOffset={1}>
      </Col>
    </Row>
  }
}

export default Main;