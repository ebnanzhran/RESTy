import './App.css';

import React, { useEffect, useReducer, useState } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Results from './components/results/Results';
import Footer from './components/footer/Footer';
import History from './components/history/History';
import reducer, { success, body, reqParams, history, getHistory } from './reducer';

const initialState = {
  data: [],
  body: {},
  reqParams: {},
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);


  const callApi = async (formData, bodyData) => {
    if (formData.method === 'GET') {
      setIsLoading(true);
      const response = await fetch(formData.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setIsLoading(false);
      dispatch(success(data));
      dispatch(reqParams(formData));
      dispatch(getHistory([formData.method, formData.url, data]));
      console.log('Res GET :>> ', response);

    } else if (formData.method === 'POST') {
      setIsLoading(true);
      const response = await fetch(formData.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyData.body,
      });
      const bodyOutput = {
        body: bodyData.body,
      };
      dispatch(body(bodyOutput.body));
      dispatch(reqParams(formData));
      setIsLoading(false);
      dispatch(history([formData.method, formData.url, bodyOutput.body]));
      console.log('Res POST :>> ', response);

    }
    else if (formData.method === 'PUT') {
      setIsLoading(true);
      const response = await fetch(formData.url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyData.body,
      });
      const bodyOutput = {
        body: bodyData.body,
      };
      dispatch(body(bodyOutput.body));
      dispatch(reqParams(formData));
      setIsLoading(false);
      dispatch(history([formData.method, formData.url, bodyOutput.body]));
      console.log('Res PUT :>> ', response);

    } else if (formData.method === 'DELETE') {
      setIsLoading(true);
      const response = await fetch(formData.url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch(reqParams(formData));
      setIsLoading(false);
      dispatch(history([formData.method, formData.url, null]));
      console.log('Res DELETE :>> ', response);
    }
  }

  useEffect(() => {
    dispatch(reqParams(state.reqParams));
    dispatch(body(state.body));
    dispatch(success(state.data));
  }, [state.reqParams, state.body, state.data]);

  return (
    <div className="App">
      <Header />
      <div className='url'>URL: {state.reqParams.url}</div>
      <div className='req'>Request Method: {state.reqParams.method}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} method={state.reqParams.method} body={state.body} isLoading={isLoading} />
      <History history={state.history} />
      <Footer />
    </div>
  );
}

export default App;