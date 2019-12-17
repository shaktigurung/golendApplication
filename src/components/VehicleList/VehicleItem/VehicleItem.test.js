import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from './../../../../utils';
import VehicleItem from './VehicleItem';

const setUp = (props = {}) => {
  const component = shallow(<VehicleItem {...props} />);
  return component;
};

describe('VehicleItem Component', () => {
  
  let component;
  beforeEach(()=> {
      component = setUp();
  });

  it('should render without error', () => {
    const wrapper = findByTestAttr(component, 'vehicleItem');
    expect(wrapper.length).toBe(1);
  });

  it('should render image for car', () => {
    const carImage = findByTestAttr(component, 'carImage');
    expect(carImage.length).toBe(1);
  });

  it('should render car title', () => {
    const carTitle = findByTestAttr(component, 'carTitle');
    expect(carTitle.length).toBe(1);
  });

  it('should render car variant', () => {
    const carVariant = findByTestAttr(component, 'carVariant');
    expect(carVariant.length).toBe(1);
  });

  it('should render car price information', () => {
    const priceInfo = findByTestAttr(component, 'priceInfo');
    expect(priceInfo.length).toBe(1);
  });

});