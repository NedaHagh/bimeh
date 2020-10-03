import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import DIV from "./DIV";
import Brand from "./Brand";
import { setSelectCar, getSelectCar,getCompanies } from '../actions';
import axios from "axios";

const SelectCarType = ({ carTypes, setSelectCar, selectCar,getCompanies,companiesData }) => {
    const history = useHistory();
    const [carTypeInfo, setCarTypeInfo] = useState([]);
    const [showCarsType, setShowCarsType] = useState(false);
    const [showCarsModel, setShowCarsModel] = useState(false);
    const [carTypeActiveId, setCarTypeActiveId] = useState("");
    const [brandActiveId, setBrandActiveId] = useState("");
    const [brandArray, setBrandArray] = useState([]);
    const [showMassage, setShowMassage] = useState("");
    const [finalItems, setFinalItems] = useState({
        finalCarType: {},
        finalBrand: {},
        finalInsureCompany:{},
        finalDiscount:{}
    });

    useEffect(() => {
        if (carTypes.data != undefined) {
            setCarTypeInfo(carTypes.data);
            setShowCarsType(true)
        }
    }, [carTypes.data])


    const handleButtonClick = (index) => {
        carTypes.data.map(cars => {
            if (cars.carTypeID == index) {
                setBrandArray(cars.brand);
            }
        })
        setCarTypeActiveId(index);
    }
    const handleBrandBtnClick = (brandId) => {
        setBrandActiveId(brandId);
    }
    const handleSelectCarBtn = () => {
        setShowMassage("");
        carTypes.data.map(car => {
            if (car.carTypeID == carTypeActiveId) {
                setFinalItems(...finalItems,
                    finalItems.finalCarType = car
                )
            }
        })
        
        brandArray.map(brand => {
            if (brand.id == brandActiveId) {
                setFinalItems(...finalItems,
                    finalItems.finalBrand = brand
                )
            }
        })
        if (carTypeActiveId != "" && brandActiveId != "") {
            setSelectCar(finalItems);
            history.push("/SelectCompany");
        }
        else {
            setShowMassage("لطفا مدل ماشین را انتخاب نمایید.");
            history.push("/SelectCarType");
        } 
        getCompanies(); 
        console.log(companiesData);
    }

    useEffect(() => {
        if (brandArray.length != 0) {
            setShowCarsModel(true)
        }
    }, [brandArray])

    return (
        <div>
            <Navbar />
            {showCarsType &&
                <div className="carTypesBox">
                    <h1>انتخاب نوع خودرو</h1>
                    <div className="insideCarTypeBox">
                        {carTypes.data.map(carTypes => (
                            <DIV key={carTypes.carTypeID}
                                onButtonClick={() => handleButtonClick(carTypes.carTypeID)}
                                name={carTypes.carType} Clicked={carTypeActiveId === carTypes.carTypeID}>
                            </DIV>
                        ))}
                    </div>
                </div>
            }
            {
                showCarsModel && <div className="brandRow">
                    {brandArray.slice(0, 10).map(brand => (
                        <Brand key={brand.id}
                            onButtonClick={() => handleBrandBtnClick(brand.id)}
                            name={brand.name} Clicked={brandActiveId === brand.id} brandIcon={brand.icon}>
                        </Brand>
                    ))}
                </div>
            }
            <div className="errorMassage"><span>{showMassage}</span></div>
            {showCarsType && showCarsModel && <div className="selectCarBtn">
                <button onClick={() => history.goBack()}><MdArrowBack /><span>بازگشت به صفحه قبل</span></button>
                <button onClick={() => handleSelectCarBtn()} className="nextBtn"><span>رفتن به صفحه بعد</span><MdArrowForward /></button>
            </div>}   
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        carTypes: state.carTypes,
        selectCar: state.selectCar, 
    }
}
const mapDispatchToProps = {
    setSelectCar: setSelectCar,
    getSelectCar: getSelectCar,
    getCompanies: getCompanies

};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCarType);
