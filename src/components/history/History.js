import React, { useState, useEffect } from 'react'
import './history.css'
import JSONPretty from 'react-json-pretty';

export default function History(props) {

  const [show, setShow] = useState(false);
  const [history, setHistory] = useState([]);

  const handleDeleteAll = () => {
    setHistory([]);
  }
  useEffect(() => {
    setHistory([...history, props.history]);
    return () => {
      setHistory([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.history]);

  return (
    <section data-testid='history' className='section-history'>
      <div className='content-history'>
        <pre className='body-history'>
          {
            <li onClick={() => setShow(!show)}> History {show && <JSONPretty id='json-pretty' data={history} />}</li>
          }
        </pre>
      </div>
      {<button className='history-delete-all' onClick={handleDeleteAll}>Delete All</button>}
    </section>
  )
}