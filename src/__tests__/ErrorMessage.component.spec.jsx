// @flow
import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '../components/ErrorMessage.component';

const mockProps = {
  message: ['Something went wrong']
}

describe('ErrorMessage', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ErrorMessage { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should display text from props', () => {
    const wrapper = shallow(<ErrorMessage { ...mockProps } />);

    expect(wrapper.text()).toEqual(mockProps.message[0]);
  });
});