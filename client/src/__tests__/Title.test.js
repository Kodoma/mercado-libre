import React from 'react';
import { shallow } from 'enzyme';
import Title from "../components/Items/Title/Title";

describe('tests Title', () => {
    it('should render my Title component', () => {
        const component = shallow(<Title id={1} title={'iphone'}/>);
        expect(component.getElements()).toMatchSnapshot();
    });
});