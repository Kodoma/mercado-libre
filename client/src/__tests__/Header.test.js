import React from 'react';
import { shallow } from 'enzyme';
import Header from "../components/Header/Header";

describe("tests Header", () => {
    it("should render my Header component", () => {
        const component = shallow(<Header />);
        expect(component.getElements()).toMatchSnapshot();
    });
});