import React from 'react'
import './results.css'
import JSONPretty from 'react-json-pretty';

function Results(props) {
  let headers = {
    "Headers": {
      "Content-Type": "application/json",
    },
  }
  let newBody = props.body;
  let data = props.data;
  let method = props.method;
  const deleted = {
    "Response": "Record deleted successfully",
  }
  return (
    <section data-testid='results'>
      {
        props.isLoading ? <div className='loader'>Loading...</div>
          : <div className='content'>
            <pre className="header">
              {method === 'GET' ? <JSONPretty id='json-pretty' data={headers} /> : null}
            </pre>
            <pre className="body">
              {
                method === 'GET' ? <JSONPretty id='json-pretty' data={data} />
                  : method === 'POST' ? <JSONPretty id='json-pretty' data={newBody} /> : method === 'PUT' ? <JSONPretty id='json-pretty' data={newBody} /> : method === 'DELETE' ? <JSONPretty id='json-pretty' data={deleted} /> : null
              }
            </pre>
          </div>
      }
    </section>
  )
}

export default Results