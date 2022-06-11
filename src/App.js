import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import "./App.css"
import MovieComponent from './components/MovieComponent'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

function App() {
  
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/IMDB_Logo_2016.svg" />
         Search Movie IMDB
        </AppName>
        <SearchBox>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput
            placeholder="Search Movie"
          />
        </SearchBox>
      </Header>
      <MovieListContainer>
      <MovieComponent />
      <MovieComponent />
      <MovieComponent />
      <MovieComponent />
      <MovieComponent />
      <MovieComponent />
      <MovieComponent />
      <MovieComponent />
      <MovieComponent />
      
     
      </MovieListContainer>
    </Container>
  );
}

export default App;
