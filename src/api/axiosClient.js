import axios from 'axios';
import queryString from 'query-string';
// import { POST_REFRESH_TOKEN } from '../constants/SubUrl';
const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

const refreshToken = async (data) => {
  const result = await axios.post("url", data);
  return result.data;
};

axiosClient.interceptors.request.use(async (req) => {
  const AccessToken = JSON.parse(localStorage.getItem('access_token'));
  if (AccessToken) {
    const token = AccessToken.access.token;
    const tokenExpries = AccessToken.access.expires;
    const expires = Number(new Date(tokenExpries));
    const current = Number(new Date());
    const refreshtoken = AccessToken.refresh.token;
    if (expires && expires <= current) {
      const data = {
        refreshToken: refreshtoken,
        // deviceId: deviceId,
      };
      const result = await refreshToken(data);
      localStorage.setItem('access_token', JSON.stringify(result.data));

      req.headers = {
        ...req.headers,
        Authorization: `Bearer ${result.data.access.token}`,
      };
      return req
    }
    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${token}`,
    };
    return req;
  }

  return req;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
