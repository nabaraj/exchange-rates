import { GET_USA_DATA, GET_CAD_DATA, GET_MXN_DATA, GET_GBP_DATA, GET_EUR_DATA, GET_CHF_DATA, GET_RUB_DATA } from './types';
import axios from 'axios';

export const getUSDrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=USD').then(response => {
      dispatch({ type: GET_USA_DATA, usRateData: response.data.rates });
    });
};

export const getCADrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=CAD').then(response => {
      dispatch({ type: GET_CAD_DATA, cadRateData: response.data.rates });
    });
};

export const getMXNrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=MXN').then(response => {
      dispatch({ type: GET_MXN_DATA, mxnRateData: response.data.rates });
    });
};

export const getGBPrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=GBP').then(response => {
      dispatch({ type: GET_GBP_DATA, gbpRateData: response.data.rates });
    });
};

export const getEURrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=EUR').then(response => {
      dispatch({ type: GET_EUR_DATA, eurRateData: response.data.rates });
    });
};

export const getCHFrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=CHF').then(response => {
      dispatch({ type: GET_CHF_DATA, chfRateData: response.data.rates });
    });
};

export const getRUBrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=RUB').then(response => {
      dispatch({ type: GET_RUB_DATA, rubRateData: response.data.rates });
    });
};
