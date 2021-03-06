import React from 'react';
import Game from '../component/Game';
import Tile from '../component/Tile';
import Status from '../component/Status';
import { shallow, mount } from 'enzyme';

describe(("<Game/> component"), () => {
    let wrapper = shallow(<Game />);
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render styles correctly",() =>{
        expect(wrapper.find("ul").hasClass('board')).toBeTruthy();
        expect(wrapper.find("div").at(1).hasClass('status')).toBeTruthy();
        expect(wrapper.find("div").at(2).hasClass('restart')).toBeTruthy();
        expect(wrapper.find('button').hasClass('restart-button')).toBeTruthy();
    })
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
        expect(wrapper.find(Tile).at(0).find('button').props()["data-pro"]).toBe('X');
        expect(wrapper.find(Tile).at(0).find('button').text()).toBe('X');
    })

    it("Player O should be given next move", () => {
        wrapper.find(Tile).at(0).find('button').simulate('click');
        wrapper.find(Tile).at(1).find('button').simulate('click');

        expect(wrapper.find(Tile).at(1).find('button').text()).toBe('O');
    })

    it("Should display the next player turn", () => {
        expect(wrapper.find(Status).find('label').text()).toBe('Next Player : X');
        wrapper.find(Tile).at(0).find('button').simulate('click');

        expect(wrapper.find(Tile).at(0).find('button').text()).toBe('X');
        expect(wrapper.find(Status).find('label').text()).toBe('Next Player : O');

        wrapper.find(Tile).at(1).find('button').simulate('click');
        expect(wrapper.find(Tile).at(1).find('button').text()).toBe('O');
        expect(wrapper.find(Status).find('label').text()).toBe('Next Player : X');
    })

    it("Should display the winner", () => {
        wrapper.find(Tile).at(0).find('button').simulate('click');
        wrapper.find(Tile).at(3).find('button').simulate('click');
        wrapper.find(Tile).at(1).find('button').simulate('click');
        wrapper.find(Tile).at(4).find('button').simulate('click');
        wrapper.find(Tile).at(2).find('button').simulate('click');
        expect(wrapper.find(Status).find('label').text()).toBe('Winner is : X');
        const winningPositions = [0, 1, 2];

        const tileList = wrapper.find(Tile);
        tileList.forEach(checkStyles);

        function checkStyles(item, index) {
            if (winningPositions.includes(index)) {
                expect(item.find("button").hasClass('tile-winning')).toBeTruthy();
            } else {
                expect(item.find("button").hasClass('tile-winning')).toBeFalsy();
            }
        }
    });

    it("Should not allow next turn to be played on game over", () => {
        wrapper.find(Tile).at(0).find('button').simulate('click');
        wrapper.find(Tile).at(3).find('button').simulate('click');
        wrapper.find(Tile).at(1).find('button').simulate('click');
        wrapper.find(Tile).at(4).find('button').simulate('click');
        wrapper.find(Tile).at(2).find('button').simulate('click');
        const tileList = wrapper.find(Tile);
        tileList.forEach(tile => {
            expect(tile.find('button').props()["disabled"]).toBeTruthy();
        });
    });

    it("Should reset game to initial state on clicking Reset button", () => {
        wrapper.find(Tile).at(0).find('button').simulate('click');
        wrapper.find(Tile).at(3).find('button').simulate('click');
        wrapper.find(Tile).at(1).find('button').simulate('click');
        wrapper.find(Tile).at(4).find('button').simulate('click');
        wrapper.find(Tile).at(2).find('button').simulate('click');

        wrapper.find('button').at(9).simulate('click');
        const tileList = wrapper.find(Tile);
        tileList.forEach(tile => {
            expect(tile.find('button').text()).toBe('');
            expect(tile.find('button').props()["disabled"]).toBeFalsy();
        });
        expect(wrapper.find(Status).find('label').text()).toBe('Next Player : X');
    });

});
