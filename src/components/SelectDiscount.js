import React, { useEffect, useState } from "react";
import { DiscountItem } from "./StyledComponent";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import { setSelectCar } from "../actions";
import { connect } from "react-redux";
import { MdArrowBack } from 'react-icons/md';
import Modal from './Modal';

const SelectDiscount = ({ discount, setSelectCar, selectCar }) => {
    const history = useHistory();
    const [showList, setShowList] = useState(false);
    const [showMassage, setShowMassage] = useState("");
    const [discountActiveId, setDiscountActiveId] = useState("");
    const [discountArray, setDiscountArray] = useState([]);
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        if (discount.data != undefined) {
            setDiscountArray(discount.data);
            setShowList(true);
        }
    }, [discount.data])

    const handleDiscountBtnClick = (discountId) => {
        setDiscountActiveId(discountId);
        discount.data.map(discount => {
            if (discount.id === discountId) {
                setSelectCar({ ...selectCar, finalDiscount: discount })
            }
        })

    }
    const handleOutcomBtnClick = () => {
        setIsShowing(!isShowing);
    }
    const handleClose = () => setIsShowing(!isShowing);

    return (
        <div>
            <Navbar />
            {showList && <div className="discountRow">
                <h1>انتخاب نوع تخفیف</h1>
                <div className="insideDiscountRow">
                    {
                        discountArray.map(discount => (
                            <DiscountItem key={discount.id}
                                onClick={() => handleDiscountBtnClick(discount.id)}
                                Clicked={discountActiveId === discount.id}>
                                <p className="discountTitle">{discount.title}</p>
                            </DiscountItem>
                        ))
                    }
                </div>
            </div>
            }
            <div className="errorMassage"><span>{showMassage}</span></div>
            {showList && <div className="selectCarBtn">
                <button onClick={() => history.goBack()}><MdArrowBack /><span>بازگشت به صفحه قبل</span></button>
                <button onClick={handleOutcomBtnClick} className="nextBtn"><span>استعلام</span></button>
            </div>}
            <Modal
                isShowing={isShowing}
                hide={handleClose}
                selectCar={selectCar}
            />
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        discount: state.discount,
        selectCar: state.selectCar
    }
}
const mapDispatchToProps = {
    setSelectCar: setSelectCar
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDiscount);