import { useQuery } from "react-query";
import logo from "../../assets/icons/logo.svg";
import { PropertiesTable } from "../../components";
import "./styles.css";
import PropertiesService from "../../services/properties.service";

function Home() {
  const { isLoading, error, data } = useQuery(
    "repoData",
    PropertiesService.getProperties
  );

  // Or

  // useEffect(() => {
  //   PropertiesService.getProperties().then(setProperties);
  // }, []);

  // Or

  // useEffect(() => {
  //   async function fetchData() {
  //     const properties = await PropertiesService.getProperties();
  //     setProperties(properties);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {isLoading ? (
            <p>Loading properties...</p>
          ) : error ? (
            <p>Error loading properties...</p>
          ) : (
            <PropertiesTable properties={data.properties} />
          )}
        </div>
      </header>
    </div>
  );
}

export default Home;
