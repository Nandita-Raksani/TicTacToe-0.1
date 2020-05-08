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
        expect(wrapper.find("button").hasClass('tile-button')).toBeTruthy();
    });
});

describe(("<Tile/> component functionality"), () => {
    it("should display symbol X when value passed from Game is X", () => {
        const wrapper = shallow(<Tile value='X' />);
        expect(wrapper.find('button').props()["data-pro"]).toBe('X');
        expect(wrapper.find("button").text()).toEqual('X');
    });
    it("should display symbol O when value passed from Game is O", () => {
        const wrapper = shallow(<Tile value='O' />);
        expect(wrapper.find('button').props()["data-pro"]).toBe('O');
        expect(wrapper.find("button").text()).toEqual('O');
    });
    it("should not allow the already occupied tile to be clicked again", () => {
        const wrapper = shallow(<Tile value='X' />);
        expect(wrapper.find('button').props()["disabled"]).toBeTruthy();
    });
    it("Should not allow next turn to be played on game over", () => {
        const wrapper = shallow(<Tile value='X' isWinning={true} />);
        expect(wrapper.find('button').hasClass('tile-winning')).toBeTruthy();
    });
});