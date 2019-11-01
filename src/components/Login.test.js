import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Login from "./Login";

describe("login", () => {
  test("should render properly", () => {
    const renderer = new ShallowRenderer();
    const element = renderer.render(<Login />);
    expect(element).toMatchSnapshot();
  });
});
