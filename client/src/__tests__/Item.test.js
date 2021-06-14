import React from 'react';
import 'jsdom-global/register';
import {shallow} from 'enzyme';
import Item from "../components/Item/Item";

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('tests Search', () => {
    it('should render my Item component', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { id: 'MLA901420435' },
        }))

        const component = shallow(<Item />);
        expect(component.getElements()).toMatchSnapshot();
    });

});