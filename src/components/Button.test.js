import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import Button from "./Button";
import jest from "jest-mock";

configure({ adapter: new Adapter() });

describe("<Button />", () => {
  describe("onClick()", () => {
    test("handleClick works properly", () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(<Button handleClick={mockOnClick} />);
      // console.log(wrapper.debug());
      // console.log(wrapper.find("button"));
      wrapper.find("button").simulate("click");
      expect(mockOnClick).toHaveBeenCalled();
    });
    test("correct value is shown on button", () => {
      const mockValue = "GET USER";
      const wrapper = shallow(<Button value={mockValue} />);
      // console.log(wrapper.debug());
      expect(
        wrapper.containsMatchingElement(<button>GET USER</button>)
      ).toBeTruthy();
    });
  });
});
