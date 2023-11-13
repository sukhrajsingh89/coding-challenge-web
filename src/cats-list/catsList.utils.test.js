import {catsListFilter} from "./catsList.utils";

describe("CatsListUtils", () => {
  

  it("Should return Male cats list when gender provided as male", () => {
    const MockUserData = [
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
          name: "Samantha",
          gender: "Female",
          age: 40,
          pets: [{ name: "Tabby", type: "Cat" }],
        },
      ];
    const result = catsListFilter(MockUserData, "Male");
    expect(result).toEqual([{ name: "Garfield", type: "Cat" }]);
  });

  it("Should return Female cats list when gender provided as Female", () => {
    const MockUserData = [
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
          name: "Samantha",
          gender: "Female",
          age: 40,
          pets: [{ name: "Tabby", type: "Cat" }],
        },
      ];
    const result = catsListFilter(MockUserData, "Female");
    expect(result).toEqual([{ name: "Tabby", type: "Cat" }]);
  });
});
