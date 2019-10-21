import axios from 'axios';
import url from '../constants/url';
import './axiosInterceptor';

class productApi {
  static createProduct(product) {
    const formData = new FormData();

    Object.keys(product).map((key) => formData.append(key, product[key]));

    if (product.picture) {
      formData.append('picture', {
        uri: product.picture, // your file path string
        name: 'picture.jpg',
        type: 'image/jpg',
      });
    }
    return axios({
      method: 'post',
      url: `${url}/product/`,
      timeout: 5 * 2000,
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(({ data }) => data)
      .catch((error) => error);
  }
}

export default productApi;
