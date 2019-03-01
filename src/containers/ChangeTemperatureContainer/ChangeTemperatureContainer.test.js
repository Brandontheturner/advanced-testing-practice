import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import ChangeTemperatureContainer from "./";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <ChangeTemperatureContainer />
    </Provider>
  );
});

beforeEach(() => {
  store.getState().currentCount = 0;
});

describe("ChangeTemperatureContainer", () => {
  it("when text box changes the currentTemp changes", () => {
    // console.log(store.getState().currentTemp);
    // expect(store.getState().currentCount).toBe(4);
  });
});
