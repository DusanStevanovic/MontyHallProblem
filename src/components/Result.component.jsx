// @flow
import React from 'react';
import { Typography } from '@material-ui/core';
import type { SuccessObjectDataType } from '../types/index.type';

const Result = ({ data: { win, lose, numberOfGames } }: SuccessObjectDataType) => {
  const getPercent = (game: number): string => Math.round((game * 100) / Number(numberOfGames)) + '%';

  return (
    <div>
      <Typography variant="h2">Awesome result ! You got {win} wins and {lose} lose games.</Typography>
      <Typography variant="h4">See percentage: </Typography>
      <div>
        <div>
          <Typography variant="h6" color="primary">WIN: {getPercent(win)}</Typography>
          <div className="progressWin" style={{ background: '#0277bd', height: '40px', width: getPercent(win), transition: 'all, 300ms' }}></div>
        </div>
        <div>
          <Typography variant="h6" color="primary">LOSE: {getPercent(lose)}</Typography>
          <div className="progressLose" style={{ background: '#ef5350', height: '40px', width: getPercent(lose), transition: 'all, 300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Result;