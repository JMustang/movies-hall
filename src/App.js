import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests/index";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Tendências" fetchUrl={requests.fetchTrending} />
      <Row title="Mais Assistidos" fetchUrl={requests.fetchTopRated} />
      <Row title="ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="documentário" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
