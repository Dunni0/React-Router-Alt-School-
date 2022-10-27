import React from "react";
import Users from "../components/Users";
import User from "../components/User";
import SharedComp from "../components/SharedComp";
import Error from "../components/Error"
import {Routes, Route} from "react-router-dom"
import ErrorBoundary from "./ErrorBoundary";

function Router () {
    return(
      <div className="wrapper">
        <Routes> 
        <Route path="/" element={<SharedComp/>}>
          <Route index element = {<Users/>} />
          <Route path="/users">
          <Route path="/users/user/:id" element={<User/>}/>
          </Route>
          <Route path="*" element = {<Error/>} />
        </Route>
      </Routes>
      </div>
    )
}

export default Router