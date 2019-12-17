import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from './../../../utils';
import Years from './Years';

const setUp = (props = {}) => {
  const component = shallow(<Years {...props} />);
  return component;
};

describe('Years Component', () => {
  
  let component;
  beforeEach(()=> {
      component = setUp();
  });

  it('should render without error', () => {
    const wrapper = findByTestAttr(component, 'yearsContainer');
    expect(wrapper.length).toBe(1);
  });

  it('should render heading for years page', () => {
    const yearHeader = findByTestAttr(component, 'yearsHeader');
    expect(yearHeader.length).toBe(1);
  });

  it('should render list of years', () => {
    const yearList = findByTestAttr(component, 'yearList');
    expect(yearList.length).toBe(1);
  });

});