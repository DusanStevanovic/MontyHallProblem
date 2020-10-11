// @flow
import React from 'react';
import SuccessMessage from '../components/SuccessMessage.component';
import type { SuccessObjectDataType } from '../types/index.type';

const Result = ({ successObject }: SuccessObjectDataType) => {
  const { messages, data: { win, lose, numberOfGames } } = successObject;

  return (
    <div>
      <SuccessMessage message={messages} />
      <div>
        <p>WIN: {Math.round((win * 100) / Number(numberOfGames))}%</p>
        <p>LOSE: {Math.round((lose * 100) / Number(numberOfGames))}%</p>
      </div>
    </div>
  );
}

export default Result;