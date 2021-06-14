import React from 'react';
import 'jsdom-global/register';
import {mount, shallow} from 'enzyme';
import Items from '../components/Items/Items';

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('tests Items', () => {
    it('should render my Items component', () => {
        const component = shallow(<Items />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('should render Items', function () {
        useRouter.mockImplementationOnce(() => ({
            query: { search: 'iphone' },
        }))

        const wrap = mount(<Items />)

        expect(wrap.find('.custom')).toBeDefined()

    })
});
