import React from 'react';
import {shallow} from 'enzyme';
import Vehicles from './Vehicles';

describe('Vehicles', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Vehicles />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});