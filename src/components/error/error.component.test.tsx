import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import ErrorComponent from "./error.component";

describe("<CatsList", () => {
  afterEach(() => {
    cleanup();
  });

  const renderComponent = () => {
    return render(<ErrorComponent error="Page not found" />);
  };

  it("it should render the component", () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  it("it should display error message", () => {
    const { asFragment } = renderComponent();
    const error = screen.getByTestId("error");
    expect(error).toBeInTheDocument();
  });
});
