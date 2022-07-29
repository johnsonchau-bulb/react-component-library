import React from "react";
import { render } from "@testing-library/react";

import Button , { ButtonProps } from "./Button";

describe("Test Component", () => {
  let props: ButtonProps;

  const renderComponent = () => render(<Button {...props} />);

  it("test", () => {
    props.foo = "test";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent(props.foo);
  });
});
