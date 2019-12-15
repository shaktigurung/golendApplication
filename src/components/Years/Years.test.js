import React from 'react';
import {shallow} from 'enzyme';
import Years from './Years';

describe('Years', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Years />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});