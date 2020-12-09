import React, { Component } from "react";

import WordCloud from "wordcloud";

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
      WordCloud(this.refs["my-canvas"], {
        list: this.state.wordCloud,
        gridSize: 8,
        weightFactor: 8,
        fontFamily: "Hiragino Mincho Pro, serif",
        color: "random-dark",
        rotateRatio: 0,
        backgroundColor: "#f0f0f0",
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Your Company Recognition Word Cloud</h2>
        <canvas ref="my-canvas"></canvas>
      </div>
    );
  }
}

export default CompanyWordCloud;
