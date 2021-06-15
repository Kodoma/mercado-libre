import React from 'react';
import 'jsdom-global/register';
import {mount, shallow} from 'enzyme';
import Search from '../components/Header/Search/Search';

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('__tests__ Search', () => {
    let component = shallow(<Search />);

    beforeEach(() => {
        component = shallow(<Search />);
    });

    it('should render my Search component', () => {
        expect(component.getElements()).toMatchSnapshot();
    });

    it('should render Search and check legend value', function () {
        useRouter.mockImplementationOnce(() => ({
            query: { search: 'iphone' },
        }))

        const wrap = mount(<Search />)
        expect(wrap.find('form').text()).toBe('Nunca dejes de buscar')
    })

    it('should render Search and check submit button', function () {
        useRouter.mockImplementationOnce(() => ({
            query: { search: 'iphone' },
        }))

        const wrap = mount(<Search />)

        expect(wrap.find('.searchButton')).toBeDefined()

    })

    it('should render Search and check input', function () {
        useRouter.mockImplementationOnce(() => ({
            query: { search: 'iphone' },
        }))

        const wrap = mount(<Search />)

        expect(wrap.find('.input')).toBeDefined()

    })

    it('should submit Search', () => {
        const component = shallow(<Search />);
        let prevented = false;
        component.find('.autocompleteContainer').simulate('submit',{
            preventDefault: () => {
                prevented = true;
            }
        });
        expect(prevented).toBe(true)
    });
});
