// import React, {useState} from "react";
// import { useCookies } from "react-cookie";
// import { ReactComponent as Key } from "../../assets/svg/key.svg";
// import { ReactComponent as UserPlus } from "../../assets/svg/user-plus.svg";

// const Signup =()=>{
//     const [cookies, setCookie, removeCookie] = useCookies(["token"]);
//     const [state, setState] = useState({
//         name: "",
//         family: "",
//         phoneNumber: "",
//         password: "",
//         confirmPassword: "",
//       });
//       const [displayInfo, setDisplayInfo] = useState(false);
//       const changeHandler = (event) => {
//         const { name, value } = event.target;
//         setState({
//           ...state,
//           [name]: value,
//         });
//       };
//       const submitHandler = (event) => {
//         event.preventDefault();
//         setCookie("token", state, { maxAge: 86400 });
//         setDisplayInfo(true);
//     }
//     return(
//             <form onSubmit={submitHandler}>
//                 <div className="FormField">
//             <label htmlFor="name">نام</label>
//             <input
//               onChange={changeHandler}
//               value={state.name}
//               type="text"
//               name="name"
//               id="name"
//               placeholder="فاطمه"
//             />
//           </div>
//           <div className="FormField">
//             <label htmlFor="family">نام خانوادگی:</label>
//             <input
//               onChange={changeHandler}
//               value={state.family}
//               type="text"
//               name="family"
//               id="family"
//               placeholder="محمدی"
//             />
//           </div>
//           <div className="FormField">
//             <label htmlFor="phoneNumber">شماره موبایل:</label>
//             <input
//               onChange={changeHandler}
//               value={state.phoneNumber}
//               type="text"
//               name="phoneNumber"
//               id="phoneNumber"
//               placeholder="09120000000"
//             />
//           </div>
//           <div className="FormField">
//             <label htmlFor="password">پسورد:</label>
//             <input
//               onChange={changeHandler}
//               value={state.password}
//               type="text"
//               name="password"
//               id="password"
//               placeholder="********"
//             />
//           </div>
//           <div className="FormField">
//             <label htmlFor="confirmPassword">تایید پسورد:</label>
//             <input
//               onChange={changeHandler}
//               value={state.confirmPassword}
//               type="text"
//               name="confirmPassword"
//               id="confirmPassword"
//               placeholder="********"
//             />
//           </div>
//           <button type="submit" className="SignUpBtn">
//               <span>ثبت نام</span>
//               <UserPlus className="signUpIcon"/>
//           </button>
//             </form>
//     )
// }
// export default Signup;
/////////////////////////////////
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import PropTypes from 'prop-types';
import { Info } from '../StyledComponent';
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { ReactComponent as Key } from "../../assets/svg/key.svg";
import { ReactComponent as UserPlus } from "../../assets/svg/user-plus.svg";

const Signup = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [displayInfo, setDisplayInfo] = useState(false);
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
    // const[signUpInfo,setSignUpInfo]=useState({});
    const validNameFamilyRegex = /^[\u0600-\u06FF\s]+$/;
    const validMobileRegex = /(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/;
    const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,10}$/;

    const changeHandler = (event) => {
        const { name, value } = event.target;
        console.log(value)
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
        setDisplayInfo(true);
    }

    return (
        <div>
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
                    />
                </div><label className="errorField">{state.errors.confirmPassword}</label>
                    <button type="submit" className="SignUpBtn">
                        <span>ثبت نام</span>
                        <UserPlus className="signUpIcon" />
                    </button>
            </form>
        </div>
    )
}
export default Signup;
