import React, { useState } from 'react'
import './form.css'

function Form(props) {
  const [click, setClick] = useState('GET');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: click,
      url: url,
    };
    const bodyData = {
      body: body,
    };
    props.handleApiCall(formData, bodyData);
  }

  const handelClick = e => {
    e.preventDefault();
    setClick(e.target.value);
  }
  const handelUrl = e => {
    e.preventDefault();
    setUrl(e.target.value);
  }
  const handleBody = e => {
    e.preventDefault();
    const formattedBody = JSON.stringify(JSON.parse(e.target.value), null, 2);
    setBody(formattedBody);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='label-input'>
          <span>URL: </span>
          <input name='url' type='text' className='input' placeholder='Inter a URL' data-testid='input' onChange={handelUrl} />
          <button type="submit" className='btn' data-testid='submit'>GO!</button>
        </label>
        <label for='styledSelect1' className='custom-select'>
          <span>Choose a Method: </span>
          <div className='btns'>
            <div>
              <select onChange={handelClick} id='styledSelect1' name='options'>
                <option id="get" data-testid='get' value='GET'>GET</option>
                <option id="post" data-testid='post' value='POST'>POST</option>
                <option id="put" data-testid='put' value='PUT'>PUT</option>
                <option id="delete" data-testid='delete' value='DELETE'>DELETE</option>
              </select>
            </div>
          </div>
        </label>
        {click === 'POST' || click === 'PUT' ? <textarea className='text' onChange={handleBody} placeholder='Enter valid JSON' /> : null}
      </form>
    </>
  )
}

export default Form;