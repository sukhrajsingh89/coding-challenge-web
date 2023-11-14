import React, { useEffect, useState ,FC} from "react";
import {ICats, IUsers } from "../types";
import { catsListFilter } from "../catsList.utils";

interface Props {
    userObject:IUsers[],
    gender:any
}

const CatsListGender:FC<Props> =({userObject,gender}) =>{

  const [users, setusers] = useState<ICats[]>([]);

   useEffect(()=>{
   setusers(catsListFilter(userObject,gender))
   },[userObject])

    return (<div data-testid="cats-list">{users.map((user,idx) => (
        <div key={idx}>{user.name}</div>
      ))}</div>)
}

export default CatsListGender