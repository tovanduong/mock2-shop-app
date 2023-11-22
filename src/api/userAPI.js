import axiosClient from './axiosClient';

export function getAllProduct() {
  return axiosClient
    .get("/product")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getProductByCategory({ item, size }) {
  return axiosClient
    .get(size ? `/category?name=${item}&size=${size}` : `/category?name=${item}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}


export function getCartById({ id }) {
  return axiosClient
    .get("/cart/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}


export function getCate() {
  return axiosClient
    .get("/category")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postOrder(payload) {
  return axiosClient
    .post("/order", payload)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getOrder() {
  return axiosClient
    .get("/order?_limit=5")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}