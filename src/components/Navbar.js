import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Navbar = ({ auth }) => {
    const [signUpInfo, setSignUpInfo] = useState({
        name:"",
        family:""
    });

    useEffect(()=>{
        setSignUpInfo({...signUpInfo,name:auth.name,family:auth.family})
    },[auth])


    return (
        <React.Fragment>
            <nav className="navbar">
    <h1>{auth != null ? <span className="enterMessage">کاربر گرامی <span className="userInfo">{signUpInfo.name}</span> <span className="userInfo">{signUpInfo.family}</span> خوش آمدید.</span> : ""}</h1>
            </nav>
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, undefined)(Navbar);