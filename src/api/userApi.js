import axios from 'axios';
import url from '../constants/url';
import './axiosInterceptor';
class userApi {
  static getMe() {
    return axios({
      method: 'GET',
      url: `${url}/users/me`,
      timeout: 5 * 1000,
    })
      .then(({data}) => data)
      .catch(error => error);
  }

  static getUser = user =>
    axios({
      method: 'GET',
      url: `${url}/users/${user}`,
      timeout: 5 * 1000,
    })
      .then(response => ({success: true, response}))
      .catch(error => error);

  static signUp(user) {
    const formData = new FormData();

    console.log(user)
    for (const [key, value] of Object.entries(user)) {
      formData.append(key, value);
    }
    if (user.avatar && user.avatar[0] !== '5') {
      formData.append('image', {
        uri: user.avatar, // your file path string
        name: 'my_photo.jpg',
        type: 'image/jpg',
      });
    }
    return axios({
      method: 'post',
      url: `${url}/users/register`,
      timeout: 5 * 1000,
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(({data}) => data)
      .catch(error => error);
  }

  static login(user) {
    return axios({
      method: 'post',
      url: `${url}/users/login`,
      timeout: 5 * 1000,
      data: user,
    })
      .then(({data}) => data)
      .catch(error => error);
  }

  static deleteAccount() {
    return axios({
      method: 'put',
      url: `${url}/users/delete`,
      timeout: 5 * 1000,
    })
      .then(({data}) => data)
      .catch(error => error);
  }

  static editProfile(user) {
    const formData = new FormData();

    console.log(user);
    for (const [key, value] of Object.entries(user)) {
      if (key !== 'team') {
        formData.append(key, value);
      }
    }
    if (user.avatar && user.avatar[0] !== '5') {
      formData.append('image', {
        uri: user.avatar, // your file path string
        name: 'my_photo.jpg',
        type: 'image/jpg',
      });
    }
    return axios({
      method: 'put',
      url: `${url}/users/edit`,
      timeout: 5 * 1000,
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(({data}) => data)
      .catch(error => error);
  }

  static changePassword({password, newPassword}) {
    return axios({
      method: 'put',
      url: `${url}/users/changePassword`,
      timeout: 5 * 1000,
      data: {password, newPassword},
    })
      .then(({data}) => data)
      .catch(error => error);
  }

  static verifyEmail(email) {
    return axios({
      method: 'post',
      url: `${url}/users/verifyEmail`,
      timeout: 5 * 1000,
      data: {email},
    })
      .then(response => ({success: true, response}))
      .catch(error => error);
  }

  static verifyToken(email, token) {
    return axios({
      method: 'post',
      url: `${url}/users/verifyToken`,
      timeout: 5 * 1000,
      data: {email, token},
    })
      .then(response => ({success: true, response}))
      .catch(error => error);
  }
}

export default userApi;
