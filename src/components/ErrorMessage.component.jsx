// @flow
import React from 'react';
import type { MessagesDataType } from '../types/index.type';
import Alert from '@material-ui/lab/Alert';

const ErrorMessage = ({ message }: MessagesDataType) => {
  return (
    <Alert severity="error">{message.join('\n')}</Alert>
  );
}

export default ErrorMessage;