import * as types from '../actions/types';

const initialState = {
    usExcRateData: [],
    cadExcRateData: [],
    mxnExcRateData: [],
    gbpExcRateData: [],
    eurExcRateData: [],
    chfExcRateData: [],
    rubExcRateData: [],
    jpyExcRateData: [],
    audExcRateData: [],
    nzdExcRateData: [],
    zarExcRateData: [],
    inrExcRateData: [],
};

const exchangeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case types.GET_USA_DATA:
            newState = { ...state, usExcRateData: action.usRateData };
            break;
        case types.GET_CAD_DATA:
            newState = { ...state, cadExcRateData: action.cadRateData };
            break;
        case types.GET_MXN_DATA:
            newState = { ...state, mxnExcRateData: action.mxnRateData };
            break;
        case types.GET_GBP_DATA:
            newState = { ...state, gbpExcRateData: action.gbpRateData };
            break;
        case types.GET_EUR_DATA:
            newState = { ...state, eurExcRateData: action.eurRateData };
            break;
        case types.GET_CHF_DATA:
            newState = { ...state, chfExcRateData: action.chfRateData };
            break;
        case types.GET_RUB_DATA:
            newState = { ...state, rubExcRateData: action.rubRateData };
            break;
        case types.GET_JPY_DATA:
            newState = { ...state, jpyExcRateData: action.jpyRateData };
            break;
        case types.GET_AUD_DATA:
            newState = { ...state, audExcRateData: action.audRateData };
            break;
        case types.GET_NZD_DATA:
            newState = { ...state, nzdExcRateData: action.nzdRateData };
            break;
        case types.GET_ZAR_DATA:
            newState = { ...state, zarExcRateData: action.zarRateData };
            break;
        case types.GET_INR_DATA:
            newState = { ...state, inrExcRateData: action.inrRateData };
            break;
        default:
            newState = state;
    }
    return newState;
};

export default exchangeReducer;
