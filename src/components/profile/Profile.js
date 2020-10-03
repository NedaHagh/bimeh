import React from 'react';
import { Div } from "../StyledComponent";
import styles from "../../App.css";
import { connect } from 'react-redux';


const Profile = ({ carTypes }) => {
    return (
        <div className="container">
            <div className="sidebar">
            </div>
            <div className="main">
                <div className="header">
                   {console.log(carTypes)}
                </div>
                <div className="content"></div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    carTypes: state.carTypes,
})

export default connect(mapStateToProps, null)(Profile);  
