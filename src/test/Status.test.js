import React from 'react';
import { mount } from 'enzyme';
import Status from '../component/Status';
describe(("<Status/> component"), () => {
    let wrapper;
    beforeEach(() => {
        const board = ['', '', '', '', '', '', '', '', ''];
        wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()}/>);
    });
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should have the label to display game status", () => {
        expect(wrapper.find("label")).toBeDefined();
    });
});

describe(("<Status/> functionality"), () => {
    it("should render the player's turn correctly", () => {
        const wrapper = mount(<Status currentPlayer='X' board={Array(9).fill('')} onGameDrawOrWon={jest.fn()}/>);
        expect(wrapper.find('label').text()).toBe('Next Player : X');
    });
    it("should declare X as winner if first row is completely filled by X ", () => {
        const board = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });

    it("should declare O as winner if first row is completely filled by O ", () => {
        const board = ['O', 'O', 'O', 'X', 'X', '', '', 'X', ''];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if second row is completely filled by X ", () => {
        const board = ['O', '', 'O', 'X', 'X', 'X', '', '', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if second row is completely filled by O ", () => {
        const board = ['X', '', 'X', 'O', 'O', 'O', '', 'X', ''];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if third row is completely filled by X ", () => {
        const board = ['O', '', 'O', '', '', '', 'X', 'X', 'X'];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if third row is completely filled by O ", () => {
        const board = ['X', '', 'X', '', 'X', '', 'O', 'O', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if first column is completely filled by X ", () => {
        const board = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if first column is completely filled by O ", () => {
        const board = ['O', 'X', '', 'O', 'X', '', 'O', '', 'X'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if second column is completely filled by X ", () => {
        const board = ['O', 'X', 'O', '', 'X', '', '', 'X', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if second column is completely filled by O ", () => {
        const board = ['X', 'O', '', 'X', 'O', '', '', 'O', 'X'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if third column is completely filled by X ", () => {
        const board = ['O', 'O', 'X', '', '', 'X', '', '', 'X'];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if third column is completely filled by O ", () => {
        const board = ['X', '', 'O', 'X', '', 'O', '', 'X', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });

    it("should declare X as winner if UpperLeft to LowerRight diagonal is completely filled by X ", () => {
        const board = ['X', 'O', 'O', '', 'X', '', '', '', 'X'];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });

    it("should declare O as winner if UpperLeft to LowerRight diagonal is completely filled by O ", () => {
        const board = ['O', '', 'X', 'X', 'O', 'X', '', '', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });

    it("should declare X as winner if UpperRight to LowerLeft diagonal is completely filled by X ", () => {
        const board = ['O', 'O', 'X', '', 'X', '', 'X', '', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    }); 

    it("should declare O as winner if UpperRight to LowerLeft diagonal is completely filled by O ", () => {
        const board = ['X', '', 'O', 'X', 'O', 'X', 'O', '', ''];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    
    it("Should not allow next turn to be played on game over", () => {
        const board = ['O', 'O', 'X', '', 'X', '', 'X', '', ''];
        const onPlayerWonMockFn = jest.fn();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(0);

        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={onPlayerWonMockFn} />);
        expect(onPlayerWonMockFn).toHaveBeenCalled();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(1);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    })
    
    it("should be draw when all tiles are completely filled and no winner", () => {
        const board = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Game is draw!');
    });
});