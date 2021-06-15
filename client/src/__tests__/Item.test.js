import React from 'react';
import { shallow } from 'enzyme';
import Item from "../components/Item/Item";

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('__tests__ Item', () => {
    it('should render my Item component', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { id: 'MLA923362627'},
        }))
        const component = shallow(<Item />);
        expect(component.getElements()).toMatchSnapshot();
    });

});