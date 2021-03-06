import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Recognition from "./components/Recognition";
import CompanyWordCloud from "./components/WordCloud";
import SuperFans from "./components/SuperFans";
import RecentRecognition from "./components/RecentRecognition";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 20px 100px;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const StyledLinkWrapper = styled.div`
  text-align: center;
  a {
    color: #3066b1;
    text-decoration: none;
    :hover,
    focus {
      color: #0053ba;
    }
  }
`;

export default function App() {
  return (
    <StyledWrapper>
      <StyledHeader>Workgrid Rockstar</StyledHeader>
      <div>
        <StyledLinkWrapper>
          <Link to={`/`} className="link">
            Recognize
          </Link>
          {" | "}
          <Link to={`/recognition-app/superfans`} className="link">
            Superfans
          </Link>
          {" | "}
          <Link to={`/recognition-app/history`} className="link">
            Recent Recognition
          </Link>
          {" | "}
          <Link to={`/recognition-app/character`} className="link">
            Company Character
          </Link>
        </StyledLinkWrapper>
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
              component={RecentRecognition}
            />
            <Route
              path="/recognition-app/character"
              exact
              component={CompanyWordCloud}
            />
          </Switch>
        </div>
      </div>
    </StyledWrapper>
  );
}
