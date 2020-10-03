import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Brand from "./Brand";
import { connect } from "react-redux";
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { useHistory } from "react-router-dom";
import { setSelectCar,getDiscount } from "../actions";

const SelectCompany = ({ companiesData, setSelectCar, selectCar,getDiscount }) => {
    const history = useHistory();
    const [companyArray, setCompanyArray] = useState([]);
    const [companyActiveId, setCompanyActiveId] = useState("");
    const [showMassage, setShowMassage] = useState("");
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        if (companiesData.data != undefined) {
            setCompanyArray(companiesData.data);
            setShowList(true);
        }
    }, [companiesData.data])

    const handleCompanyBtnClick = (companyId) => {
        setCompanyActiveId(companyId);
        console.log(selectCar);
        companiesData.data.map(company => {
            if (company.id === companyId) {
                setSelectCar({ ...selectCar, finalInsureCompany: company });
            }
        })
    }
    const handleSelectCompanyBtn =()=>{
        if (companyActiveId != "") {
            getDiscount();
            history.push("/SelectDiscount");
        }
        else {
            setShowMassage("لطفا شرکت بیمه موردنظر خود را انتخاب نمایید.");
            history.push("/SelectCompany");
        } 
    }

    return (
        <div>
            <Navbar />
            {
                showList && <div className="companyRow">
                    <h1>انتخاب شرکت بیمه</h1>
                    <div className="insideCompanyRow">
                    {companiesData.data.map(company => (
                        <Brand key={company.id}
                            onButtonClick={() => handleCompanyBtnClick(company.id)}
                            name={company.name} Clicked={companyActiveId === company.id} brandIcon={company.icon}>
                        </Brand>
                    ))}
                    </div>
                </div>
            }
            <div className="errorMassage"><span>{showMassage}</span></div>
            {showList && <div className="selectCarBtn">
                <button onClick={() => history.goBack()}><MdArrowBack /><span>بازگشت به صفحه قبل</span></button>
                <button onClick={() => handleSelectCompanyBtn()} className="nextBtn"><span>رفتن به صفحه بعد</span><MdArrowForward /></button>
            </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        companiesData: state.companiesData,
        selectCar: state.selectCar
    }
}
const mapDispatchToProps = {
    setSelectCar: setSelectCar,
    getDiscount: getDiscount
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCompany);