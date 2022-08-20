const initialState = {
    data: [],
    body: {},
    reqParams: {},
    history: [
      {
        method: '',
        url: '',
        body: {},
      }
    ],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SUCCESS':
        return {
          ...state,
          data: action.payload,
        };
      case 'BODY':
        return {
          ...state,
          body: action.payload,
        };
      case 'REQ_PARAMS':
        return {
          ...state,
          reqParams: action.payload,
        };
      case 'HISTORY':
        return {
          ...state,
          history: [{
            method: action.payload[0],
            url: action.payload[1],
            body: JSON.parse(action.payload[2]),
          }],
        };
      case 'GET_HISTORY':
        return {
          ...state,
          history: [{
            method: action.payload[0],
            url: action.payload[1],
            body: action.payload[2],
          }]
        };
      default:
        return state;
    }
  }
  
  export const success = data => ({
    type: 'SUCCESS',
    payload: data,
  });
  
  export const body = body => ({
    type: 'BODY',
    payload: body,
  });
  
  export const reqParams = reqParams => ({
    type: 'REQ_PARAMS',
    payload: reqParams,
  });
  
  export const history = history => ({
    type: 'HISTORY',
    payload: history,
  });
  
  export const getHistory = history => ({
    type: 'GET_HISTORY',
    payload: history,
  });