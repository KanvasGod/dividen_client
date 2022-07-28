import React from 'react';
import Logo from "../images/moneyflask.png"
import CirclePlus from "../images/plus.png"
import accountIco from "../images/account.png" 
import '../css/Nav.css'

const Nav = () => {
    return (
        <div className="navBar">
            <div className="leftBox">
                <div className="logoBox">
                    <img src={Logo} className="logo"/>
                </div>
                <div className="selectBox"></div>
                <div className="selectBoxShadow"></div>
                <div className='boxItem'>Home</div>
                <div className='boxItem'>Blog</div>
                <div className='boxItem'>Browse</div>
                <div className='logoBox'>
                <img src={CirclePlus} className="logoPlus"/>
                </div>
            </div>
            <div className='rightBox'>
                <img src={accountIco} className="accountIco"/>
            </div>
        </div>
    )
}

export default Nav;