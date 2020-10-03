import styled from "styled-components";

const DiscountItem =styled.div`
        background-color: ${props => (props.Clicked ? `blue` : `#ebebeb`)}
        opacity: ${props => (props.Clicked ? `1` : `0.5`)}
        border: 1px solid #ebebeb;
        display: flex;
        flex-direction: column;
        cursor:pointer;
        `
const Div = styled.div`
        background-color: ${props => (props.clicked ? `blue` : `green`)}
      .aaa{
        text-align: center;
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color:#fff;
    }
  `
 const Info = styled.div`
        margin-top:20px;
        padding-right:10px;
        height:50px;
        font-size:1rem;
        font-weight:bold;
        width:20rem;
        display: grid;
        color:#fff;
        text-align: right;
        float:right;
        text-decoration:none;
        direction: rtl;
        display: ${props => (props.displayInfo ? `block` : `none`)};
        .InfoField{
        font-size:1rem;
        color:#6d597a; 
        }
`
const Button = styled.button`
        margin-left:1.4rem;
        height: 2.9rem;
        font-weight:500;
        font-size:1.1rem;
        cursor:pointer;
        padding:0.7rem;
        border-color:#fff;
        border-radius: 0.3rem;
        background-color: ${props => (props.showButton ? `#8ac926` : `#e0e1dd`)};
        color: ${props => (props.showButton ? `#fff` : `#80999d`)};
        disabled: ${props => (props.showButton ? false : true)};
`
export {Info, Button, Div, DiscountItem};
