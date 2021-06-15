import React from 'react';
import { shallow } from 'enzyme';
import Loading from "../components/Loading/Loading";

describe('__tests__ Loading', () => {
    it('should render my Loading component', () => {
        const component = shallow(<Loading />);
        expect(component.getElements()).toMatchSnapshot();
    });
});