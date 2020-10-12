// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Result from '../components/Result.component';
import type { SuccessObjectDataType } from '../types/index.type';

const mockProps: SuccessObjectDataType = {
  messages: ['Success !'],
  data: {
    win: 70,
    lose: 30,
    numberOfGames: 100,
    withChanging: true,
  }
}

describe('Result', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Result {...mockProps} />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should match progress with data from props for win game', () => {
    const wrapper = shallow(<Result {...mockProps} />);

    expect(wrapper.find('.progressWin').prop('style')).toHaveProperty('width', '70%');
  });

  it('should match progress with data from props for lose game', () => {
    const wrapper = shallow(<Result {...mockProps} />);

    expect(wrapper.find('.progressLose').prop('style')).toHaveProperty('width', '30%');
  });
});