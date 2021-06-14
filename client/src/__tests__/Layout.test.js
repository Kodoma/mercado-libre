import React from 'react';
import { shallow } from 'enzyme';
import Layout from "../components/Layout/Layout";

describe('tests Layout', () => {
    it('should render my Layout component', () => {
        const component = shallow(<Layout/>);
        expect(component.getElements()).toMatchSnapshot();
    });
});