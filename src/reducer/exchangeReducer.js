import * as types from '../actions/types';

const initialState = {
    usExcRateData: [],
    cadExcRateData: [],
    mxnExcRateData:[],
    gbpExcRateData:[],
    eurExcRateData:[],
    chfExcRateData:[],
    rubExcRateData:[],
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
          default:
              newState = state;
      }
    return newState;
  };
  
  export default exchangeReducer;
