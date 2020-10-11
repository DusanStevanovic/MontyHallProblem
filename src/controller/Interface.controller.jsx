// @flow
import React, { useState } from 'react';
import { initialFormObject, initialErrorObject, initialSuccessObject } from '../constants/general.constants';
import ErrorMessage from '../components/ErrorMessage.component';
import Result from '../components/Result.component';
import type { FormObjectDataType } from '../types/index.type';

const Interface = () => {
  const [formData, setFormData] = useState(initialFormObject);
  const [errorHandle, setErrorHandle] = useState(initialErrorObject);
  const [successObject, setSuccessObject] = useState(initialSuccessObject);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const sendForm = e => {
    e.preventDefault();

    setErrorHandle(initialErrorObject);

    const { radio, combinations }: FormObjectDataType = formData;

    fetch('/api/startgame', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      cache: 'no-cache',
      body: JSON.stringify({ radio, combinations }),
    }).then(res => {
      return res.json();
    }).then(data => {
      const { error = false, messages = [] } = data;

      if (error) {
        setErrorHandle(data);
      }

      setSuccessObject(data);

      return data;
    }).catch(err => {
      setErrorHandle({ error: true, messages: ['Something went wrong'] });
    });
  };

  return (
    <>
      {errorHandle.error && <ErrorMessage message={errorHandle.messages} />}
      <form>
        <label htmlFor="numberOfCombinations">
          Number of games:
          <input type="number" id="numberOfCombinations" name="combinations" onChange={onChange} />
        </label>
        <p>Change door ?</p>
        <label htmlFor="yes">
          Of course!
          <input type="radio" id="yes" name="radio" value="changeyes" checked={formData.radio === 'changeyes'} onChange={onChange} />
        </label>
        <label htmlFor="no">
          No way !
          <input type="radio" id="no" name="radio" value="changeno" checked={formData.radio === 'changeno'} onChange={onChange} />
        </label>
        <button onClick={sendForm}>Lets roll !</button>
        {successObject.success && <Result successObject={successObject} />}
      </form>
    </>
  );
}

export default Interface;