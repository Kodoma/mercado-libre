import React from 'react';
import { shallow } from 'enzyme';
import Items from '../components/Items/Items';

describe('tests Items', () => {
    it('should render my Items component', () => {
        const component = shallow(<Items />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
