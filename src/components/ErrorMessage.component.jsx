// @flow
import React from 'react';
import type { MessagesDataType } from '../types/index.type';

const ErrorMessage = ({ message }: MessagesDataType) => {
  return (
    <p>{message.join('\n')}</p>
  );
}

export default ErrorMessage;