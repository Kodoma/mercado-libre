import React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/Header/Search/Search';

describe('tests Search', () => {
    it('should render my Search component', () => {
        const component = shallow(<Search />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
