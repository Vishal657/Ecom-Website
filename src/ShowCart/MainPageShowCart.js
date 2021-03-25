import React, { Fragment, useState } from 'react'
import './MainPageShowCart.css'
import img from '../Assets/Women/Green.jpg'
import Card from './CardForShowCart/Card'
import NavBar from '../Navigation/NavBar'
import alertify from 'alertifyjs'

const MainPageShowCart = (props) => {
    const [cards, setcards] = useState(null);

    function getKeys(obj) {
        try{
            return Object.keys(obj).length;
        } catch(e) {
            return 0
        }
    }

    if (cards === null && localStorage.getItem("cart")) {
        const goods = JSON.parse(localStorage.getItem("cart"));
        let helper = []
        for (let i in goods) {
            helper.push(<Card img={img} title={goods[i].Title} price={goods[i].Price} key={"s*h$" + i} id={i} setcards={setcards} />)
        }
        setcards(helper)
    }
    if (((cards && cards.length !== 0) || !cards) && getKeys(JSON.parse(localStorage.getItem("cart"))) === 0) {
        alertify.error('<span style="color:white">Your Cart is empty</span>')
    }

    return (
        <Fragment>
            <NavBar />
            
            <div className="container-fluid MainCartPage">
                <div className="row px-5 pt-5 justify-content-center">
                    {
                        (cards && cards.length !== 0) ? cards
                            :
                            null
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default MainPageShowCart;