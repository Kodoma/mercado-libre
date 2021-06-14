import React from 'react';
import { shallow } from 'enzyme';
import Error from "../components/Error/Error";

describe('tests Search', () => {
    it('should render my Search component', () => {
        const component = shallow(<Error />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
