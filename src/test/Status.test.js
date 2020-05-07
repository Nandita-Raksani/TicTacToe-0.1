import React from 'react';
import { shallow } from 'enzyme';
import Status from '../component/Status';
describe(("<Status/> component"), () => {
    it("should render correctly", () => {
        let wrapper = shallow(<Status />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should have the label to display game status", () => {
        let wrapper = shallow(<Status />);
        expect(wrapper.find("label")).toBeDefined();
    }); 
});

describe(("<Status/> functionality"), () => {
    it("should render the player's turn correctly", () => {
        let wrapper = shallow(<Status currentPlayer='X'/>);
        expect(wrapper.find('label').text()).toBe('Next Player : X');
    });
    it("should declare X as winner if first row is completely filled by X ", () => {
        let board = ['X','X','X','O','O','','','',''];
        let wrapper = shallow(<Status currentPlayer='O' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if first row is completely filled by O ", () => {
        let board = ['O','O','O','X','X','','','X',''];
        let wrapper = shallow(<Status currentPlayer='X' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if second row is completely filled by X ", () => {
        let board = ['O','','O','X','X','X','','',''];
        let wrapper = shallow(<Status currentPlayer='O' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if second row is completely filled by O ", () => {
        let board = ['X','','X','O','O','O','','X',''];
        let wrapper = shallow(<Status currentPlayer='X' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if third row is completely filled by X ", () => {
        let board = ['O','','O','','','','X','X','X'];
        let wrapper = shallow(<Status currentPlayer='O' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if third row is completely filled by O ", () => {
        let board = ['X','','X','','X','','O','O','O'];
        let wrapper = shallow(<Status currentPlayer='X' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if first column is completely filled by X ", () => {
        let board = ['X','O','','X','O','','X','',''];
        let wrapper = shallow(<Status currentPlayer='O' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if first column is completely filled by O ", () => {
        let board = ['O','X','','O','X','','O','','X'];
        let wrapper = shallow(<Status currentPlayer='X' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if second column is completely filled by X ", () => {
        let board = ['O','X','O','','X','','','X',''];
        let wrapper = shallow(<Status currentPlayer='O' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if second column is completely filled by O ", () => {
        let board = ['X','O','','X','O','','','O','X'];
        let wrapper = shallow(<Status currentPlayer='X' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
    it("should declare X as winner if third column is completely filled by X ", () => {
        let board = ['O','O','X','','','X','','','X'];
        let wrapper = shallow(<Status currentPlayer='O' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : X');
    });
    it("should declare O as winner if third column is completely filled by O ", () => {
        let board = ['X','','O','X','','O','','X','O'];
        let wrapper = shallow(<Status currentPlayer='X' board={board}/>);
        expect(wrapper.find('label').text()).toBe('Winner is : O');
    });
});