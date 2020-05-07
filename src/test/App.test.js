import React from 'react';
import App from '../App';
import Game from '../component/Game';
import { shallow } from 'enzyme';

describe(("<App/> component"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have the title", () => {
    expect(wrapper.find("header").text()).toEqual("Tic-Tac-Toe");
  });

  it("should load Game component", () => {
    expect(wrapper.find(Game)).toBeDefined();
  });
});