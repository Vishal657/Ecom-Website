import React, { Fragment, useState } from 'react'
import './WishList.css'
import img from '../Assets/Women/Green.jpg'
import Card from './CardForShowCart/Card'
import NavBar from '../Navigation/NavBar'
import alertify from 'alertifyjs'

const WishList = (props) => {
    const [cards, setcards] = useState(null);

    function getKeys(obj) {
        return Object.keys(obj).length;
    }

    if (cards === null && localStorage.getItem("wishlist")) {
        const goods = JSON.parse(localStorage.getItem("wishlist"));
        let helper = []
        for (let i in goods) {
            helper.push(<Card img={img} title={goods[i].Title} price={goods[i].Price} key={"s*h$" + i} id={i} setcards={setcards} {...goods[i]}/>)
        }
        setcards(helper)
    }
    if (((cards && cards.length !== 0) || !cards) && getKeys(JSON.parse(localStorage.getItem("wishlist"))) === 0) {
        alertify.error('<span style="color:white">Your Wish List is empty</span>')
    }

    return (
        <Fragment>
            <NavBar />
            
            <div className="container-fluid MainWishListPage">
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

export default WishList;