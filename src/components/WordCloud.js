import React, { Component } from "react";
import styled from "styled-components";

import WordCloud from "wordcloud";

const StyledCanvas = styled.div`
  margin: 10px auto;
  text-align: center;
`;

class CompanyWordCloud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordCloud: [],
    };
  }
  async componentDidMount() {
    let currentComponent = this;
    async function fetchWordCloudStats() {
      try {
        const result = await fetch(
          `https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/wordCloudStats/`,
          {
            method: `GET`,
          }
        );
        const body = await result.json();
        currentComponent.setState({ wordCloud: body });
      } catch (err) {
        console.log(err);
        return null;
      }
    }

    fetchWordCloudStats().then(() => {
      console.log(this.state.wordCloud);
      WordCloud(this.refs["my-canvas"], {
        list: this.state.wordCloud,
        gridSize: 8,
        weightFactor: 5,
        fontFamily: "Hiragino Mincho Pro, serif",
        color: "random-dark",
        rotateRatio: 0,
        rotationSteps: 45,
        backgroundColor: "#f0f0f0",
      });
    });
  }

  render() {
    return (
      <StyledCanvas>
        <h2>Your Company Word Cloud</h2>
        <canvas width="1000" height="600" ref="my-canvas"></canvas>
      </StyledCanvas>
    );
  }
}

export default CompanyWordCloud;
