import logo from "../../assets/icons/logo.svg";
import { PropertiesTable } from "../../components";
import { useProperties } from "../../hooks/useProperties";
import "./styles.css";

function Home() {
  const { isLoading, error, data } = useProperties();

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
