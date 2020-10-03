import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

const Modal = ({ isShowing, hide,selectCar }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
            <div className="header">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>
           انتخاب شما
          </p>
          </div>
          <div className="modalBody">
            {console.log(selectCar)}
            <label>نوع ماشین:</label><p>{selectCar.finalCarType.carType}</p>
            <label>مدل ماشین:</label><p>{selectCar.finalBrand.name}</p>
            <label>شرکت بیمه:</label><p>{selectCar.finalInsureCompany.company}</p>
            <label>نوع تخفیف:</label><p>{selectCar.finalDiscount.title}</p>
        </div>
        </div>
        
      </div>
    </React.Fragment>, document.body
  ) : null;
    
export default Modal;
