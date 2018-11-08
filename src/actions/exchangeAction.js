import { GET_USA_DATA, GET_CAD_DATA, GET_MXN_DATA, GET_GBP_DATA, GET_EUR_DATA, GET_CHF_DATA, GET_RUB_DATA, GET_JPY_DATA, GET_AUD_DATA, GET_NZD_DATA, GET_ZAR_DATA, GET_INR_DATA  } from './types';
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

export const getJPYrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=JPY').then(response => {
      dispatch({ type: GET_JPY_DATA, jpyRateData: response.data.rates });
    });
};

export const getAUDrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=AUD').then(response => {
      dispatch({ type: GET_AUD_DATA, audRateData: response.data.rates });
    });
};

export const getNZDrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=NZD').then(response => {
      dispatch({ type: GET_NZD_DATA, nzdRateData: response.data.rates });
    });
};

export const getZARrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=ZAR').then(response => {
      dispatch({ type: GET_ZAR_DATA, zarRateData: response.data.rates });
    });
};

export const getINRrates = () => dispatch => {
    return axios.get('https://api.exchangeratesapi.io/latest?base=INR').then(response => {
      dispatch({ type: GET_INR_DATA, inrRateData: response.data.rates });
    });
};
