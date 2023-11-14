import { IUsers, ICats } from "./types";

export const catsListFilter = (list: IUsers[],gender:string): ICats[] => {
  const users: IUsers[] = list?.filter((user) => user.gender === gender);

  let catList: ICats[] = [];
  users?.forEach((element) => {
    element?.pets?.forEach((pet) => {
      if (pet.type === "Cat") {
        catList.push(pet);
      }
    });
  });

  return catList.sort((a, b) => a.name.localeCompare(b.name));
};




export const REACT_APP_API_URL= "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json"


