import React from 'react';
import Tile from '../component/Tile';
import { shallow } from 'enzyme';

describe(("<Tile/> component"), () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Tile />);
    });
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should have the button with style class", () => {
        expect(wrapper.find("button").hasClass('tile-button')).toEqual(true);
    }); jest.fn()
});

describe(("<Tile/> component functionality"), () => {
    it("should display symbol X when value passed from Game is X", () => {
        let wrapper = shallow(<Tile value='X' />);
        expect(wrapper.find("button").text()).toEqual('X');
    });
});