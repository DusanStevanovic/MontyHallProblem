//@flow
import React from 'react';
import type { MessagesDataType } from '../types/index.type';

const SuccessMessage = ({ message }: MessagesDataType) => {
  return (
    <p>{message[0]}</p>
  );
}

export default SuccessMessage;