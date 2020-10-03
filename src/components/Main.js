import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Signup from "../components/login/Signup";
import SelectCarType from "./SelectCarType";
import SelectCompany from "../components/SelectCompany";
import SelectDiscount from "../components/SelectDiscount";
import SelectInsurance from "../components/SelectInsurance";
import Profile from "./profile/Profile";


const Main = ()=>{
return(
    <Switch>
    <Route exact path="/">
        <Signup/>
    </Route>
    <Route exact path="/SelectCarType">
        <SelectCarType/>
    </Route>
    <Route exact path="/SelectCompany">
        <SelectCompany/>
    </Route>
    <Route exact path="/SelectDiscount">
        <SelectDiscount/>
    </Route>
    <Route exact path="/SelectInsurance">
    <SelectInsurance/>
    </Route>
</Switch>
)
}
export default Main;
