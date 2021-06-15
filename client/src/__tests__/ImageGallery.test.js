import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from "../components/Item/ImageGallery/ImageGallery";

describe('__tests__ ImageGallery', () => {
    it('should render my ImageGallery component', () => {
        const component = shallow(<ImageGallery  pictures={[]}/>);
        expect(component.getElements()).toMatchSnapshot();
    });
});