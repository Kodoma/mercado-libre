import React from 'react';
import Index from '../../pages/index';
import Items from '../../pages/items/index';
import Item from '../../pages/items/[id]';
import Error from "../../pages/error";
import { cleanup } from '@testing-library/react';
import 'jsdom-global/register';
import { shallow } from 'enzyme';


const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Snapshot Pages', () => {
    afterEach(cleanup);

    it('renders homepage unchanged', () => {
        const component = shallow(<Index />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('renders items list page unchanged on route items/search=iphone', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { search: 'iphone' },
        }))

        const component = shallow(<Items />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('renders item page unchanged on route items/[id]', () => {
        useRouter.mockImplementationOnce(() => ({
            query: { id: 'MLA923362627' },
        }))

        const component = shallow(<Item />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('renders error page /error', () => {
        const component = shallow(<Error />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
