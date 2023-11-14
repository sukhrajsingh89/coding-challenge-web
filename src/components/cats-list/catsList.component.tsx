import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spacer, DivWrapper } from "./catsList.style";
import { IUsers } from "./types";
import CatsListGender from "./cats-list-gender/catsListGender.component";

import { REACT_APP_API_URL } from "./catsList.utils";

const CatsList = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(REACT_APP_API_URL);

        setUsers(response.data);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <DivWrapper>
        <div data-testid="male-list">Male</div>
        <Spacer />
        <CatsListGender userObject={users} gender={"Male"} />
        <Spacer />
        <div data-testid="female-list">Female</div>
        <Spacer />
        <CatsListGender userObject={users} gender={"Female"} />
      </DivWrapper>
    </>
  );
};

export default CatsList;
