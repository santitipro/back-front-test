import { useQuery } from "react-query";
import PropertiesService from "../services/properties.service";

export const useProperties = () => {
  return useQuery("repoData", PropertiesService.getProperties);
};
