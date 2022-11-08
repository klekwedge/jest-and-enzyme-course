import { shallow } from "enzyme";
import React from "react";
import Title from "./title";

describe("Title component", () => {
  it("Should render title component with props", () => {
    const component = shallow(<Title title='Test title'/>);
    expect(component).toMatchSnapshot();
  });

  it("Should render title component without props", () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });
});
