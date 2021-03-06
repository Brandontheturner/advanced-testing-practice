import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import UserButtonsContainer from "./";

let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <UserButtonsContainer />
    </Provider>
  );
});

beforeEach(() => {
  // store.getState().users = [];
});

describe("UserButtonsContainer", () => {
  it("should increase users array length by 1", () => {
    var increaseButton = wrapper.find("button").at(0);
    // console.log(store.getState().users);
    var userLength = store.getState().users.length;
    increaseButton.simulate("click");
    expect(store.getState().users.length).toBe(userLength + 1);
  });
  it("should decrease users array length by 1", () => {
    var decreaseButton = wrapper.find("button").at(1);
    // console.log(store.getState().users);
    var userLength = store.getState().users.length;
    decreaseButton.simulate("click");
    expect(store.getState().users.length).toBe(userLength - 1);
  });
});

// ### User Button Tests
//   * Create a folder for UserButtonContainer in containers X
//     * Move UserButtonsContainer.js into this folder and rename it index X
//       * Fix import paths X
// * Add a file UserButtonsContainer.tests.js X
//   * Import UserButtonsContainer into the test X
//     * Import store into the test X
//       * create a variable called “wrapper” X
//     * in beforeAll, mount the Provider and UserButtonsContainer and assign to wrapper X
//   * Create a describe “Add User Button” X
//         * Create an it “should increase users array length by 1” X
//         * Use the wrapper to find the first button
//   * Simulate a click on the button
//     * use store.getState() to check the length of the users array
//       * expect it toBe 1 more than the current length
//         * Create a describe “Remove User Button”
//         * Create an it “should decrease users array length by 1”
//         * Use the wrapper to find the second button
//   * Simulate a click on the button
//     * use store.getState() to check the length of the users array
//       * expect it toBe 1 less than the current length

// ### User Display Tests
//   * Create a folder for UserContainer in containers
//     * Create a file for UserContainer.test.js
//       * describe “UserContainer”
// * it “should render an li for each user”
// * mount Provider and SpecialTextContainer into wrapper
//   * use the store to dispatch a “ADD_USER” action with the value of a user object
//     * `expect(wrapper.find(“li”)).to.have.length(8);`

// ### Hopefully at this point you can see there is a pattern to making the tests

// ### ChangeTemperatureContainer.js
//   * Create a test file for this container to ensure that when the text box changes, the state currentTemp changes

// ### CityDropDownContainer.js
//   * Create a test file to ensure that when the drop down changes, the state currentCity changes

// ### CurrentCityContainer.js
//   * Create a test file to ensure that when the state currentCity is change, the text of the div changes to “CurrentCity: whatever city”
