
import axiosClient from './axiosClient';

const productApi = {
  getAllCategories: (params) => {
    const url = "";
    return axiosClient.get(url, { params });
  },

  getProductById: (id, params) => {
    const url = `/product?productId=${id}`;
    return axiosClient.get(url, params);
  },
};

export default productApi;
