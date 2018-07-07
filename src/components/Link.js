import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLink = styled.a`
  color: ${props => props.active? 'tan': '#fff'};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding-right: 33px;
  border-right: 1px dotted #fff;
  &:hover{
    color: #8d8d8d;
    text-decoration: none;
  }
  &:last-child{
    border-right: none;
  }
`

// Link component;
class Link extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  render() {
    return <StyledLink href={this.props.link}>{this.props.text}</StyledLink>
  }
}

export default Link;