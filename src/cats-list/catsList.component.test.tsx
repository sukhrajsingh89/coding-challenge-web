import React from "react";
import {render,cleanup } from "@testing-library/react";
 import CatsList from "./catsList.component";


describe('<CatsList',()=>{

    afterEach(()=>{
        cleanup()
    })

const renderComponent = (props={}) =>{
    return render (<CatsList {...props}/>)
}

it('it should render the component',()=>{
    const {asFragment}=renderComponent()
    expect(asFragment()).toMatchSnapshot()
})

})