import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 120000,
});

const services = {
  getProducts: async () => await api.get("products"),
  getProduct: async (id: string) => await api.get(`products/${id}`),
};

export default services;
