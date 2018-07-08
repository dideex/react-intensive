import React, { Component } from "react";
import Slide1 from "../img/1.jpg";
import Slide2 from "../img/2.jpg";
import Slide3 from "../img/3.jpg";
import Slide4 from "../img/4.jpg";
import PropTypes from "prop-types";

// Slider component;
class Slider extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state.max = this.state.slides.length;
  }

  state = {
    slides: [
      {
        eachSlide: `url(${Slide1})`
      },
      {
        eachSlide: `url(${Slide2})`
      },
      {
        eachSlide: `url(${Slide3})`
      },
      {
        eachSlide: `url(${Slide4})`
      }
    ],
    autoplay: false,
    active: 0,
    max: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => this.intervalBetweenSlides(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  intervalBetweenSlides = () => {
    if (this.state.autoplay === true) {
      if (this.state.active === this.state.max - 1) {
        //this.state.active = 0
        this.setState({active:  0})
      } else {
        //this.state.active++
        this.setState(({active}) => ({active: active + 1}));
      }

      this.setState({
        active: this.state.active
      });
    }
  };

  toggleAutoplay = e => {
    e.preventDefault()
    this.setState(({ autoplay }) => ({ autoplay: !autoplay }));
  };

  nextOne = () => {
    this.setState(({ active, max }) => ({
      active: active < max - 1 ? active + 1 : 0
    }));
  };

  prevOne = () => {
    this.setState(({ active, max }) => ({
      active: active > 0 ? active - 1 : max - 1
    }));
  };

  dots = index => {
    this.setState({
      active: index
    });
  };

  isActive = value => (this.state.active === value ? "active" : "");

  setSliderStyles = () => ({
    width: this.state.slides.length * 100 + "%",
    transform: `translateX(${this.state.active *
      (- 100 / this.state.slides.length)}%)`
  });

  renderSlides = () =>
    this.state.slides.map((item, i) => (
      <div
        key={i}
        className="each-slide"
        style={{
          backgroundImage: item.eachSlide,
          width: 100 / this.state.slides.length + "%"
        }}
      />
    ));

  renderDots = () =>
    this.state.slides.map((_, i) => (
      <li
        key={i}
        className={this.isActive(i) + " dots"}
        ref="dots"
        style={{
          width: 100 / this.state.slides.length + "%"
        }}
        onClick={this.dots.bind(this, i)}
      >
        <a href="#"> • </a>
      </li>
    ));

  svg = {
    dynamic: (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
    static: (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    prev: (
      <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    ),
    next: (
      <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    )
  };

  renderPlayStop = () =>
    this.state.autoplay ? this.svg.dynamic : this.svg.static;

  renderArrows = () => (
    <div>
      <button type="button" className="arrows prev" onClick={this.prevOne}>
        {this.svg.prev}
      </button>
      <button type="button" className="arrows next" onClick={this.nextOne}>
        {this.svg.next}
      </button>
    </div>
  );

  render() {
    return (
      <div className="slider">
        <div className="wrapper" style={this.setSliderStyles()}>
          {this.renderSlides()}
        </div>
        {this.renderArrows()}
        <ul className="dots-container">{this.renderDots()}</ul>
        <a href="#" className="toggle-play" onClick={this.toggleAutoplay}>
          {this.renderPlayStop()}
        </a>
      </div>
    );
  }
}

export default Slider;
