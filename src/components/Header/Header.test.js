import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from './../../../utils';
import Header from './Header';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe( 'Header Component', ()=> {

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('should render without error', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render a logo', () => {
        const logo = findByTestAttr(component, 'logoImage');
        expect(logo.length).toBe(1);
    });

    it('should render a button', () => {
        const golendButton = findByTestAttr(component, 'golendButton');
        expect(golendButton.length).toBe(1);
    });

    it('should render a horizontal line on left', () => {
        const rulerLeft = findByTestAttr(component, 'rulerLeft');
        expect(rulerLeft.length).toBe(1);
    });

    it('should render a profile image', () => {
        const profile = findByTestAttr(component, 'profileImage');
        expect(profile.length).toBe(1);
    });

    it('should render a horizontal line on right', () => {
        const rulerRight = findByTestAttr(component, 'rulerRight');
        expect(rulerRight.length).toBe(1);
    });

});