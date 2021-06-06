import { useEffect } from "react";
import logo from "../../assets/icons/logo.svg";
import "./styles.css";
import PropertiesService from "../../services/properties.service";

function Home() {
  useEffect(() => {
    async function fetchData() {
      const response = await PropertiesService.getProperties();
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
