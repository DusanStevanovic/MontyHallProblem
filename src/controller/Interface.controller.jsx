// @flow
import React, { useState, useEffect, useCallback } from 'react';
import { initialFormObject, initialErrorObject, initialSuccessObject } from '../constants/general.constants';
import ErrorMessage from '../components/ErrorMessage.component';
import SuccessMessage from '../components/SuccessMessage.component';
import Result from '../components/Result.component';
import { getRequestOptions } from '../util/frontendLogic';
import LinearProgress from '@material-ui/core/LinearProgress';
import Form from '../components/Form.component';
import type { FormObjectDataType } from '../types/index.type';

const Interface = () => {
  const [formData, setFormData] = useState(initialFormObject);
  const [errorHandle, setErrorHandle] = useState(initialErrorObject);
  const [successObject, setSuccessObject] = useState(initialSuccessObject);
  const [progress, setProgress] = React.useState(0);

  const onChange = e => {
    setProgress(0);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const sendForm = async (e) => {
    e.preventDefault();

    setErrorHandle(initialErrorObject);

    const { radio, combinations }: FormObjectDataType = formData;

    setProgress(oldProgress => {
      if (oldProgress === 100) return 0;
      const diff = Math.random() * 10;
      return Math.min(oldProgress + diff, 100);
    });

    try {
      const data = await fetch('/api/startgame', getRequestOptions(radio, combinations));
  
      const response = await data.json();
      const { error, messages } = response;

      if (error) {
        setErrorHandle(response);
        setSuccessObject({...response, success: false});
        setProgress(0);
      } else {
        setProgress(100)
        setSuccessObject(response);
      }
    } catch (err) {
      setErrorHandle({ error: true, messages: ['Something went wrong'] });
    }
  };

  return (
    <>
      <LinearProgress variant="determinate" value={progress} />
      {errorHandle.error && <ErrorMessage message={errorHandle.messages} />}
      {successObject.success && <SuccessMessage message={successObject.messages} />}
      <Form 
        onChange={onChange} 
        formData={formData} 
        sendForm={sendForm} 
      />
      {successObject.success && <Result {...successObject} />}
    </>
  );
}

export default Interface;