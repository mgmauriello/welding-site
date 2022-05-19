import React from "react";
import ReactDOM from "react-dom";
import Header from "./pages/header";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,
  rootElement
);
