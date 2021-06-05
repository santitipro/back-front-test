export const getProperties = () => {
  return fetch("http://localhost:8500/properties").then((data) => data.json());
};
