import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../../utils';
import VehicleList from './VehicleList';

const setUp = (props = {}) => {
  const component = shallow(<VehicleList {...props} />);
  return component;
};

describe('VehicleList Component', () => {
  
  let component;
  beforeEach(()=> {
      component = setUp();
  });

  it('should render without error', () => {
    const wrapper = findByTestAttr(component, 'vehiclesContainer');
    expect(wrapper.length).toBe(0);
  });

  it('should render heading for vehicle list page', () => {
    const vehiclesHeader = findByTestAttr(component, 'vehiclesHeader');
    expect(vehiclesHeader.length).toBe(0);
  });

  it('should render list of vehicles', () => {
    const vehicleList = findByTestAttr(component, 'vehicleList');
    expect(vehicleList.length).toBe(0);
  });
  
  it('should render terms for car', () => {
    const terms = findByTestAttr(component, 'terms');
    expect(terms.length).toBe(0);
  });
  
});
