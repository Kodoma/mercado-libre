import React from 'react';
import 'jsdom-global/register';
import {mount, shallow} from 'enzyme';
import Price from "../components/Items/Price/Price";

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('__tests__ Price', () => {

    it('should render my Price component', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { search: 'iphone' },
        }))

        const component = shallow(<Price
            id={"1"}
            amount={"100"}
            currency={"ARS"}
            free_shipping={false}
        />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('should render Price and check value and currency', function () {
        useRouter.mockImplementationOnce(() => ({
            query: { search: 'iphone' },
        }))

        const wrap = mount(<Price
                                id={"1"}
                                amount={"100"}
                                currency={"ARS"}
                                free_shipping={false}
                            />)
        expect(wrap.find('div').text()).toBe('ARS100')
    })
});
