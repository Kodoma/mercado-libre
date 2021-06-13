import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../components/BreadCrumb/Breadcrumb';

describe('tests Breadcrumb', () => {
    it('should render my Breadcrumb component', () => {
        const component = shallow(<Breadcrumb search={'iphone'} />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
