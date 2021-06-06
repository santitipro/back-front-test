import ApiService from "./api.service";

let instance = null;

// OR

// export const getProperties = () => {
//   return ApiService.get("properties");
// };

class PropertiesService {
  static get instance() {
    if (instance === null) {
      instance = new PropertiesService();
    }

    return instance;
  }

  getProperties() {
    return ApiService.get("properties");
  }
}

export default new PropertiesService();
