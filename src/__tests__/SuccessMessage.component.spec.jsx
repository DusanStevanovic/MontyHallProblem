// @flow
import React from 'react';
import { shallow } from 'enzyme';
import SuccessMessage from '../components/ErrorMessage.component';

const mockProps = {
  message: ['Success !']
}

describe('SuccessMessage', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SuccessMessage { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should display text from props', () => {
    const wrapper = shallow(<SuccessMessage { ...mockProps } />);

    expect(wrapper.text()).toEqual(mockProps.message[0]);
  });
});