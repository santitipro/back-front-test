import logo from "../../assets/icons/logo.svg";
import { PropertiesTable } from "../../components";
import { useProperties } from "../../hooks/useProperties";
import { Wrapper } from "./styles";

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
    <Wrapper>
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <div>
          {isLoading ? (
            <p>Loading properties...</p>
          ) : error ? (
            <p>Error loading properties...</p>
          ) : (
            <PropertiesTable properties={data.properties} />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
