// @form
import React from 'react';
import { 
  Typography, 
  Button, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  TextField 
} from '@material-ui/core';
import type { FormDataType } from '../types/index.type';

const Form = ({ onChange, formData, sendForm }: FormDataType) => {
  return (
    <form autoComplete="off">
      <TextField id="filled-basic" label="Number of games:" variant="filled" type="number" id="numberOfCombinations" name="combinations" onChange={onChange} />
      <Typography variant="h4">Change door ?</Typography>
      <RadioGroup>
        <FormControlLabel label="Of course !" type="radio" control={<Radio />} id="yes" name="radio" value="changeyes" checked={formData.radio === 'changeyes'} onChange={onChange} />
        <FormControlLabel label="No way !" type="radio" control={<Radio />} id="no" name="radio" value="changeno" checked={formData.radio === 'changeno'} onChange={onChange} />
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={sendForm}>Lets roll !</Button>
    </form>
  );
}

export default Form;