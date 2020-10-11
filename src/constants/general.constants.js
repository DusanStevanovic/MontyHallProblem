// @flow
import type { SuccessObjectInitialDataType, ErrorObjectDataType , FormObjectDataType } from '../types/index.type';

export const initialErrorObject: ErrorObjectDataType = {
  error: false,
  messages: [''],
};

export const initialFormObject: FormObjectDataType = {
  radio: 'changeyes',
  combinations: 0,
};


export const initialSuccessObject: SuccessObjectInitialDataType = {
  success: false,
  messages: [''],
  data: {
    win: 0,
    lose: 0,
    withChanging: false,
    numberOfGames: 0,
  }
};