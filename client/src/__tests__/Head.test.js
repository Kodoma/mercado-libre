import React from 'react';
import 'jsdom-global/register';
import {shallow} from 'enzyme';
import Head from "../components/Head/Head";


describe('tests Head', () => {
    it('should render my Head component', () => {
        const component = shallow(<Head />);
        expect(component.getElements()).toMatchSnapshot();
    });

});