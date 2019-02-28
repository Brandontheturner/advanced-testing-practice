import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import CityDropDownContainer from "./";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <CityDropDownContainer />
    </Provider>
  );
});

beforeEach(() => {
  store.getState().currentCount = 0;
});

describe("CityDropDownContainer", () => {
  it("should change currentCity to what is selected in dropdown", () => {
    var cityDropDown = wrapper.find("select").at(0);
    cityDropDown.simulate("change", { target: { value: "Austin" } });
    expect(store.getState().currentCity).toBe("Austin");
    // console.log();
    // expect(store.getState().currentCount).toBe(4);
  });
});
