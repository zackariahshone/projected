import "./style.css";
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {SampleCard} from "./card";
import { config } from "react-spring";
class ExampleCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeSlide: "",
      truckList:props.truckList
    };
  }
  truckSlides = [];
  slides = [
    {
      key: 1,
      content: <SampleCard />
    },
    {
      key: 2,
      content: <SampleCard />
    },
    {
      key: 3,
      content: <SampleCard />
    },
    {
      key: 4,
      content: <SampleCard />
    },
    {
      key: 5,
      content: <SampleCard />
    },
    {
      key: 6,
      content: <SampleCard />
    },
    {
      key: 7,
      content: <SampleCard />
    },
    {
      key: 8,
      content: <SampleCard />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ changeSlide: index }) };
  });

  render() {
    return (
      <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          changeSlide={this.state.changeSlide}
          animationConfig={config.gentle}
          showNavigation
        />
      </div>
    );
  }
}
export default ExampleCarousel;
