import { React } from "react";
import ReactDOM from "react-dom/client";
import "../app.css";

import Header from "./components/Header";
import Body from "./components/Body";
const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
