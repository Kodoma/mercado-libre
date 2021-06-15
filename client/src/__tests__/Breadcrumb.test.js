import React from 'react';
import 'jsdom-global/register';
import {mount, shallow} from 'enzyme';
import Breadcrumb from '../components/BreadCrumb/Breadcrumb';

describe('__tests__ Breadcrumb', () => {
    it('should render my Breadcrumb component', () => {
        const component = shallow(<Breadcrumb search={'iphone'} />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('should render without throwing an error', function () {
        const wrap = mount(<Breadcrumb search={''} />)
        expect(wrap.find('div').text()).toBe('')
    })
});
