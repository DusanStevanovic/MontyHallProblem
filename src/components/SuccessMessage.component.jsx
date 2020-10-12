//@flow
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import type { MessagesDataType } from '../types/index.type';

const SuccessMessage = ({ message }: MessagesDataType) => {
  return (
    <Alert severity="success">{message[0]}</Alert>
  );
}

export default SuccessMessage;