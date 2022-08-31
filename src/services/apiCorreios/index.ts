import axios from 'axios';

import { obterDadosRastreioObjeto } from './obterDadosRastreioObjeto';

const api = axios.create({
  baseURL: 'https://proxyapp.correios.com.br/v1'
});

api.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export const apiCorreios = {
  obterDadosRastreioObjeto: (codRastreio: string) => obterDadosRastreioObjeto(api, codRastreio)
}