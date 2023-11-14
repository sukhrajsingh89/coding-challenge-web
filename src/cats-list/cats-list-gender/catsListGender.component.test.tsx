import React from "react";
import { render, cleanup,screen } from "@testing-library/react";
import CatsListGender from "./catsListGender.component";

describe("<CatsList", () => {
  afterEach(() => {
    cleanup();
  });

  const renderComponent = (props = {}) => {
    return render(<CatsListGender userObject={[]} gender={undefined} />);
  };

  it("it should render the component", () => {
    const props = {
      userObject: [
        {
          name: "Bob",
          gender: "Male",
          age: 23,
          pets: [
            { name: "Garfield", type: "Cat" },
            { name: "Fido", type: "Dog" },
          ],
        },
        {
          name: "Jennifer",
          gender: "Female",
          age: 18,
          pets: [{ name: "Garfield", type: "Cat" }],
        },
        { name: "Steve", gender: "Male", age: 45, pets: null },
        {
          name: "Fred",
          gender: "Male",
          age: 40,
          pets: [
            { name: "Tom", type: "Cat" },
            { name: "Max", type: "Cat" },
            { name: "Sam", type: "Dog" },
            { name: "Jim", type: "Cat" },
          ],
        },
        {
          name: "Samantha",
          gender: "Female",
          age: 40,
          pets: [{ name: "Tabby", type: "Cat" }],
        },
        {
          name: "Alice",
          gender: "Female",
          age: 64,
          pets: [
            { name: "Simba", type: "Cat" },
            { name: "Nemo", type: "Fish" },
          ],
        },
      ],
      gender: "Male",
    };
    const { asFragment } = renderComponent(props);
    expect(asFragment()).toMatchSnapshot();
    const catsList = screen.getByTestId('cats-list')
  expect(catsList).toBeInTheDocument();
  });

  it("it should render the cat list based on gender Male", () => {
    const defaultProps = {
      userObject: [
        {
          name: "Bob",
          gender: "Male",
          age: 23,
          pets: [
            { name: "Garfield", type: "Cat" },
            { name: "Fido", type: "Dog" },
          ],
        },
        {
          name: "Jennifer",
          gender: "Female",
          age: 18,
          pets: [{ name: "Garfield", type: "Cat" }],
        },
        { name: "Steve", gender: "Male", age: 45, pets: null },
        {
          name: "Fred",
          gender: "Male",
          age: 40,
          pets: [
            { name: "Tom", type: "Cat" },
            { name: "Max", type: "Cat" },
            { name: "Sam", type: "Dog" },
            { name: "Jim", type: "Cat" },
          ],
        },
        {
          name: "Samantha",
          gender: "Female",
          age: 40,
          pets: [{ name: "Tabby", type: "Cat" }],
        },
        {
          name: "Alice",
          gender: "Female",
          age: 64,
          pets: [
            { name: "Simba", type: "Cat" },
            { name: "Nemo", type: "Fish" },
          ],
        },
      ],
      gender: "Male",
    };

    const { asFragment } = renderComponent(defaultProps);
    expect(asFragment()).toMatchSnapshot();
  });

  it("it should render the cat list based on gender Female", () => {
    const defaultProps = {
      userObject: [
        {
          name: "Bob",
          gender: "Male",
          age: 23,
          pets: [
            { name: "Garfield", type: "Cat" },
            { name: "Fido", type: "Dog" },
          ],
        },
        {
          name: "Jennifer",
          gender: "Female",
          age: 18,
          pets: [{ name: "Garfield", type: "Cat" }],
        },
        { name: "Steve", gender: "Male", age: 45, pets: null },
        {
          name: "Fred",
          gender: "Male",
          age: 40,
          pets: [
            { name: "Tom", type: "Cat" },
            { name: "Max", type: "Cat" },
            { name: "Sam", type: "Dog" },
            { name: "Jim", type: "Cat" },
          ],
        },
        {
          name: "Samantha",
          gender: "Female",
          age: 40,
          pets: [{ name: "Tabby", type: "Cat" }],
        },
        {
          name: "Alice",
          gender: "Female",
          age: 64,
          pets: [
            { name: "Simba", type: "Cat" },
            { name: "Nemo", type: "Fish" },
          ],
        },
      ],
      gender: "Female",
    };

    const { asFragment } = renderComponent(defaultProps);
    expect(asFragment()).toMatchSnapshot();
  });
});
