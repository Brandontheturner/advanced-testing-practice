import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import UsersContainer from "./";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  );
});

// beforeEach(() => {
//   store.getState().currentCount = 0;
// });

describe("UsersContainer", () => {
  it("should render and li for each user", () => {
    store.dispatch({
      type: "ADD_USER",
      value: {
        id: 10,
        first_name: "bart",
        last_name: "simpson",
        address: "2640 Primrose Lane, Longview, TX 75604",
        phone: 15556789012,
        occupation: "pain in the butt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    });
    expect(wrapper.find("li")).toHaveLength(9);
    console.log(store.getState().users);
  });
});
