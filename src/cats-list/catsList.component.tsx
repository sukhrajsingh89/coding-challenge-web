import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spacer } from "./catsList.style";
import { IUsers } from "./types";
import CatsListGender from './cats-list-gender/catsListGender.component'

import { REACT_APP_API_URL } from "./catsList.utils";


const CatsList = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

console.log(process.env.REACT_APP_API_URL)
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        REACT_APP_API_URL
      );

      setUsers(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>Male</div>
      <Spacer />
      <CatsListGender userObject={users} gender={"Male"}/>
       <Spacer />
      <div>Female</div>
      <CatsListGender userObject={users} gender={"Female"}/>
      <Spacer />
      
    </>
  );
};

export default CatsList;
