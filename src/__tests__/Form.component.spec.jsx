// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form.component';
import type { FormDataType } from '../types/index.type';

const mockProps: FormDataType = {
  onChange: jest.fn(), 
  formData: { 
    radio: 'changeyes', 
    combinations: 10 
  }, 
  sendForm: jest.fn(),
}

describe('Form', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Form {...mockProps} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});