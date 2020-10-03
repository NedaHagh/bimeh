import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/StyledComponent";
import { MdArrowBack } from 'react-icons/md';
import { Link,useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getCarTypesData } from '../actions';

const SelectInsurance = (props) => {
    const history = useHistory();
    const [insurance, setInsurance] = useState({
        personalInsurance: true,
        bodyInsurance: false
    })
    return (
        <div>
            <Navbar />
            <div className="insuranceField">
                <h1>انتخاب بیمه</h1>
                <div className="insurancesBtn">
                <Link to="/SelectCarType"><Button showButton={insurance.personalInsurance} onClick={()=>props.getCarTypesData()}>بیمه شخص ثالث فعال</Button></Link>
                <Button showButton={insurance.bodyInsurance}>بیمه بدنه غیر فعال</Button>
                </div>
                <div>
                <div className="pageBtn">
                    <button onClick={()=>history.goBack()}><MdArrowBack/><span>بازگشت به صفحه قبل</span></button>
                </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps ={
    getCarTypesData : getCarTypesData
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectInsurance);