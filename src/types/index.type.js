// @flow
export type GamesItemsDataType = $ReadOnly<{
  id: number,
  name: string,
}>;

export type DataDataType = {|
  win: number,
  lose: number,
  withChanging: boolean,
  numberOfGames: number,
|};

export type MessagesDataType = { message: Array<string> };

export type SuccessObjectDataType = {|
  success: boolean,
  messages: Array<string>,
  data: DataDataType,
|};

export type ErrorObjectDataType = $ReadOnly<{
  error: boolean,
  messages: Array<string>,
}>;

export type FormObjectDataType = $ReadOnly<{
  radio: string,
  combinations: number,
}>;

export type FormDataType = {| 
  onChange: any, 
  formData: {| 
    radio: string, 
    combinations: number 
  |}, 
  sendForm: any 
|};