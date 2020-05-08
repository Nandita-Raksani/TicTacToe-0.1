import React from 'react';
import { mount } from 'enzyme';
import Status from '../component/Status';
describe(("<Status/> component"), () => {
    it("should render correctly", () => {
        let wrapper = mount(<Status />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should have the label to display game status", () => {
        let wrapper = mount(<Status />);
        expect(wrapper.find("label")).toBeDefined();
    });
});

describe(("<Status/> functionality"), () => {
    it("should render the player's turn correctly", () => {
        let wrapper = mount(<Status currentPlayer='X' />);
        expect(wrapper.find('label').text()).toBe('Next Player : X');
    });
    it("should declare X as winner if first row is completely filled by X ", () => {
        let board = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });

    it("should declare O as winner if first row is completely filled by O ", () => {
        let board = ['O', 'O', 'O', 'X', 'X', '', '', 'X', ''];
        let wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if second row is completely filled by X ", () => {
        let board = ['O', '', 'O', 'X', 'X', 'X', '', '', ''];
        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if second row is completely filled by O ", () => {
        let board = ['X', '', 'X', 'O', 'O', 'O', '', 'X', ''];
        let wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if third row is completely filled by X ", () => {
        let board = ['O', '', 'O', '', '', '', 'X', 'X', 'X'];
        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if third row is completely filled by O ", () => {
        let board = ['X', '', 'X', '', 'X', '', 'O', 'O', 'O'];
        let wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if first column is completely filled by X ", () => {
        let board = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if first column is completely filled by O ", () => {
        let board = ['O', 'X', '', 'O', 'X', '', 'O', '', 'X'];
        let wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if second column is completely filled by X ", () => {
        let board = ['O', 'X', 'O', '', 'X', '', '', 'X', ''];
        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if second column is completely filled by O ", () => {
        let board = ['X', 'O', '', 'X', 'O', '', '', 'O', 'X'];
        let wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if third column is completely filled by X ", () => {
        let board = ['O', 'O', 'X', '', '', 'X', '', '', 'X'];
        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if third column is completely filled by O ", () => {
        let board = ['X', '', 'O', 'X', '', 'O', '', 'X', 'O'];
        let wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });

    it("should declare X as winner if UpperLeft to LowerRight diagonal is completely filled by X ", () => {
        let board = ['X', 'O', 'O', '', 'X', '', '', '', 'X'];
        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });

    it("should declare O as winner if UpperLeft to LowerRight diagonal is completely filled by O ", () => {
        let board = ['O', '', 'X', 'X', 'O', 'X', '', '', 'O'];
        let wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });

    it("should declare X as winner if UpperRight to LowerLeft diagonal is completely filled by X ", () => {
        let board = ['O', 'O', 'X', '', 'X', '', 'X', '', ''];
        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    }); 

    it("should declare O as winner if UpperRight to LowerLeft diagonal is completely filled by O ", () => {
        let board = ['X', '', 'O', 'X', 'O', 'X', 'O', '', ''];
        let wrapper = mount(<Status currentPlayer='X' board={board} onPlayerWon={jest.fn()} />);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    
    it("Should not allow next turn to be played on game over", () => {
        let board = ['O', 'O', 'X', '', 'X', '', 'X', '', ''];
        let onPlayerWonMockFn = jest.fn();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(0);

        let wrapper = mount(<Status currentPlayer='O' board={board} onPlayerWon={onPlayerWonMockFn} />);
        expect(onPlayerWonMockFn).toHaveBeenCalled();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(1);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    })
});