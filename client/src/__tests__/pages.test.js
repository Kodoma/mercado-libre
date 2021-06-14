import React from 'react';
import Index from '../../pages/index';
import Items from '../../pages/items/index';
import Item from '../../pages/items/[id]';
import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import Error from "../../pages/error";

describe('Snapshot Pages', () => {
    afterEach(cleanup);

    it('renders homepage unchanged', () => {
        const component = shallow(<Index />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('renders items list page unchanged on route items/search=iphone', () => {
        const router = {
            query: {
                search: 'iphone'
            }
        };
        const component = shallow(<Items router={router} />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('renders item page unchanged on route items/[id]', () => {
        const router = {
            query: {
                id: 'MLA923362627'
            }
        };
        const component = shallow(<Item router={router} />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('renders error page /error', () => {
        const component = shallow(<Error />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
