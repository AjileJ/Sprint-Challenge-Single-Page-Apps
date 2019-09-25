import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import {Route} from 'react-router-dom';
// import SearchForm from './components/SearchForm';
import styled from "styled-components";

const Colors = styled.div`
color: gold;
`;
const Colors2 = styled.div`
color: green;
`;

export default function App() {
  return (
    <main>
      <Colors>
      <Header />
      </Colors>
      {/* <SearchForm /> */}
      <Route exact path='/' component={WelcomePage}/>
      <Colors2>
      <CharacterList/>
      </Colors2>
   </main>
  );
}
