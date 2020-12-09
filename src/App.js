import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Recognition from "./components/Recognition";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 20px;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const SuperFans = () => <div>Superfans!</div>;
const HistoricRecognition = () => <div>Historic recognition!</div>;
const WordMap = () => <div>Company Wordmap!</div>;

export default function App() {
  return (
    <StyledWrapper>
      <StyledHeader>Workgrid Rockstar!</StyledHeader>
      <div>
        <Link to={`/`} className="link">
          Recognition
        </Link>
        <Link to={`/home/superfans`} className="link">
          Superfans
        </Link>
        <Link to={`/home/history`} className="link">
          Historic Recognition
        </Link>
        <Link to={`/home/wordmap`} className="link">
          Company Wordmap
        </Link>
      </div>
      <div>
        <Switch>
          <Route path="/home" exact component={Recognition} />
          <Route path="/home/superfans" exact component={SuperFans} />
          <Route path="/home/history" exact component={HistoricRecognition} />
          <Route path="/home/wordmap" exact component={WordMap} />
        </Switch>
      </div>
    </StyledWrapper>
  );
}
