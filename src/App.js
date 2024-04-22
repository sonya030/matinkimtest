import { Link } from "react-router-dom";
//fullpageLibrary
// ("use client");
import { useState } from "react";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";

//styles
import "./Styles/reset.css";
import "./Styles/App.css";

//import
import Header from "./Pages/Header";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="App">
      <Header />
      <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <FullpageSection name="first">
          <Link to="/Main" className="MatinKim">
            <img
              src={process.env.PUBLIC_URL + "./img/matinkim_white_logo.svg"}
              alt="Matin_Kim_white_logo"
            />
          </Link>
        </FullpageSection>
        <FullpageSection name="second">
          <div className="KimMatin">
            <img
              src={process.env.PUBLIC_URL + "./img/kimmatin_white_logo.svg"}
              alt="kimmatin_white_logo"
            />
          </div>
        </FullpageSection>
        <FullpageSection name="third" isAutoHeight>
          <div className="copyright">
            <p>&copy;&nbsp;Matin Kim 2024</p>
          </div>
        </FullpageSection>
      </FullpageContainer>
    </div>
  );
}

export default App;
