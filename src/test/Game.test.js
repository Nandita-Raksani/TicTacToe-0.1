import React from 'react';
import Game from '../component/Game';
import Tile from '../component/Tile';
import { shallow, mount } from 'enzyme';

describe(("<Game/> component"), () => {
    let wrapper = shallow(<Game />);
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe(("<Game/> component functionality"), () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Game />);
    });
    
    it("Should render 9 empty Tiles", () => {
        expect(wrapper.find(Tile).length).toBe(9);

        wrapper.find(Tile).forEach(square => {
            expect(square.find('button').text()).toBe('');
        });
    })

    it("Player X should be given first move", () => {
        wrapper.find(Tile).at(0).find('button').simulate('click');
        expect(wrapper.find(Tile).at(0).find('button').text()).toBe('X');
    })
});