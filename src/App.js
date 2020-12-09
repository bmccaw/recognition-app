import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Recognition from "./components/Recognition";
import CompanyWordCloud from "./components/WordCloud";
import SuperFans from "./components/SuperFans";
import HistoricRecognition from "./components/HistoricRecognition";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 20px;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

export default function App() {
  return (
    <StyledWrapper>
      <StyledHeader>Workgrid Rockstar!</StyledHeader>
      <div>
        <Link to={`/`} className="link">
          Recognition
        </Link>
        {" | "}
        <Link to={`/recognition-app/superfans`} className="link">
          Superfans
        </Link>
        {" | "}
        <Link to={`/recognition-app/history`} className="link">
          Historic Recognition
        </Link>
        {" | "}
        <Link to={`/recognition-app/wordcloud`} className="link">
          Company Wordmap
        </Link>
      </div>
      <div>
        <Switch>
          <Route path="/recognition-app" exact component={Recognition} />
          <Route
            path="/recognition-app/superfans"
            exact
            component={SuperFans}
          />
          <Route
            path="/recognition-app/history"
            exact
            component={HistoricRecognition}
          />
          <Route
            path="/recognition-app/wordcloud"
            exact
            component={CompanyWordCloud}
          />
        </Switch>
      </div>
    </StyledWrapper>
  );
}
