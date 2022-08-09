import React from 'react'
import './results.css'

function Results(props) {
  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  )
}

export default Results