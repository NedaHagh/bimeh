import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory  } from "react-router-dom";
import { connect } from "react-redux";
import { setAuth } from "../../actions";
import { ReactComponent as UserPlus } from "../../assets/svg/user-plus.svg";

const Signup = ({ setAuth }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [Info, setInfo] = useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    family: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    errors: {
      name: "",
      family: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    }
  });
  const validNameFamilyRegex = /^[\u0600-\u06FF\s]+$/;
  const validMobileRegex = /(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/;
  const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,10}$/;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (value.length == 0) {
      setState(...state, state.errors[`${name}`] = `${name}` + "field should not be empty...")
    }
    switch (name) {
      case 'name':
        setState(...state, state.errors.name = "")
        validNameFamilyRegex.test(value)
          ? ""
          :
          setState(...state, state.errors.name = "name must be Persian!")
        break;
      case 'family':
        setState(...state, state.errors.family = "")
        validNameFamilyRegex.test(value)
          ? ""
          :
          setState(...state, state.errors.family = "family must be at least 5 characters long!")
        break;
      case 'mobileNumber':
        setState(...state, state.errors.mobileNumber = "")
        value.length == 11 ?
          validMobileRegex.test(value)
            ? ""
            :
            setState(...state, state.errors.mobileNumber = "mobile number is incorrect!")
          :
          setState(...state, state.errors.mobileNumber = "mobile number length is incorrect!")
        break;
      case 'password':
        setState(...state, state.errors.password = 'The length of the characters must be at least 4 and at most 10 characters!')
        validPasswordRegex.test(value)
          ? ""
          :
          setState(...state, state.errors.password = 'The length of the characters must be at least 4 and at most 10 characters!')
        break;
      default:
        break;
    }
    setState({
      ...state,
      [name]: value
    });
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCookie("token", state, { maxAge: 86400 });
    setAuth(cookies.token);
    history.push("/SelectInsurance");
  }

  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <div className="signupPageTitle">
        <a href="">ثبت نام</a>
      </div>
      <div className="FormField">
        <label htmlFor="name">نام</label>
        <input
          onChange={changeHandler}
          value={state.name}
          type="text"
          name="name"
          id="name"
        /><label className="errorField">{state.errors.name}</label>
      </div>
      <div className="FormField">
        <label htmlFor="family">نام خانوادگی:</label>
        <input
          onChange={changeHandler}
          value={state.family}
          type="text"
          name="family"
          id="family"
        /><label className="errorField">{state.errors.family}</label>
      </div>
      <div className="FormField">
        <label htmlFor="phoneNumber">شماره موبایل:</label>
        <input
          onChange={changeHandler}
          value={state.mobileNumber}
          type="text"
          maxLength={11}
          name="mobileNumber"
          id="mobileNumber"
        /><label className="errorField">{state.errors.mobileNumber}</label>
      </div>
      <div className="FormField">
        <label htmlFor="password">پسورد:</label>
        <input
          onChange={changeHandler}
          value={state.password}
          type="password"
          name="password"
          id="password"
        /><label className="errorField">{state.errors.password}</label>
      </div>
      <div className="FormField">
        <label htmlFor="confirmPassword">تایید پسورد:</label>
        <input
          onChange={changeHandler}
          value={state.confirmPassword}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        /><label className="errorField">{state.errors.confirmPassword}</label>
      </div>
        <button type="submit" className="SignUpBtn">
          <span>ثبت نام</span>
        </button>   
    </form>
  )
}
export default connect(undefined, { setAuth })(Signup);
