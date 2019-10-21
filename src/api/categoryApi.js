import axios from 'axios';
import url from '../constants/url';
import './axiosInterceptor';

class categoryApi {
  static getCategories() {
    return axios({
      method: 'GET',
      url: `${url}/category/all`,
      timeout: 2 * 1000,
    })
      .then(({ data }) => data)
      .catch((error) => error);
  }
}

export default categoryApi;
