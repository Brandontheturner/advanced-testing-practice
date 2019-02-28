import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import CounterButtonContainer from "./";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <CounterButtonContainer />
    </Provider>
  );
});

beforeEach(() => {
  store.getState().currentCount = 0;
});

describe("CounterButtonContainer", () => {
  it("Increase button increases the currentCount to 4", () => {
    var increaseButton = wrapper.find("button").at(0);
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    // console.log(store.getState().currentCount);
    expect(store.getState().currentCount).toBe(4);
  });
  it("Decrease button decreases the currentCount to -4", () => {
    var decreaseButton = wrapper.find("button").at(1);
    decreaseButton.simulate("click");
    decreaseButton.simulate("click");
    decreaseButton.simulate("click");
    decreaseButton.simulate("click");
    // console.log(store.getState().currentCount);
    expect(store.getState().currentCount).toBe(-4);
  });
});
