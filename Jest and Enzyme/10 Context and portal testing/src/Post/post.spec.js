import { shallow } from "enzyme";
import React from "react";
import Post from "./post";

// it("Should contain .post wrapper", () => {
//   const component = shallow(<Post />);
//   const wrapper = component.find(".post");
//   expect(wrapper.length).toBe(1);

//   // console.log(component.debug());
// });

// it("Should contain link", () => {
//   const component = shallow(<Post />);
//   const wrapper = component.find("a");
//   expect(wrapper.length).toBe(1);
// });

// describe("Should render Post component", () => {
//   it("Should contain .post wrapper", () => {
//     const component = shallow(<Post />);
//     const wrapper = component.find(".post");
//     expect(wrapper.length).toBe(1);

//     // console.log(component.debug());
//   });

//   it("Should contain link", () => {
//     const component = shallow(<Post />);
//     const wrapper = component.find("a");
//     expect(wrapper.length).toBe(1);
//   });
// });

const setUp = (props) => shallow(<Post {...props} />);

describe("Should render Post component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("Should contain .post wrapper", () => {
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);

    // console.log(component.debug());
  });

  it("Should contain link", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });

  it("Should render created date", () => {
    const created_at = "14-09-2022";
    component = setUp({ created_at });
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
  });
});
