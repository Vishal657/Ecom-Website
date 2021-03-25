import React from 'react'
import './Card.css'
import Button from '../Button/Button'
import { withRouter } from 'react-router'
import alertify from 'alertifyjs'

const Card = (props) => {
    const redirectToProductPage = () => {
        localStorage.setItem("soloproduct", JSON.stringify({
            img: props.img,
            Title: props.Title,
            Desc: props.Desc,
            Price: props.Price,
            Size: props.Size
        }))
        props.history.push('/viewproduct')
    }
    const AddElementTOWhishList = () =>{
        if (localStorage.getItem('wishlist')) {
            const prevData = JSON.parse(localStorage.getItem("wishlist"));
            const currData = {
                img: props.img,
                Title: props.Title,
                Desc: props.Desc,
                Price: props.Price,
                Size: props.Size
            }
            const num = Math.random();
            prevData[num] = currData
            localStorage.setItem('wishlist',JSON.stringify(prevData))
        } else {
            const num = Math.random();
            localStorage.setItem('wishlist', JSON.stringify({
                [num]: {
                    img: props.img,
                    Title: props.Title,
                    Desc: props.Desc,
                    Price: props.Price,
                    Size: props.Size
                }
            }))
        }
        alertify.success('Successfully Added to Wish List')
    }
    return (
        <div className="card p-2 m-2" style={{ width: "20rem" }}>
            <img className="card-img-top" src={props.img} alt="Card image cap" style={{ cursor: 'pointer' }}
                onClick={redirectToProductPage} style={{maxHeight:'346px'}}/>
            <div className="card-body p-2">
                <div className="addToWhishList" data-toggle="Add To Wish List" data-placement="Add To Wish List" title="Add To Wish List" onClick={AddElementTOWhishList}><span>+</span></div>
                {/* <div className="removeToWhishList" data-toggle="Remove From Wish List" data-placement="Remove From Wish List" title="Remove From Wish List"><span>-</span></div> */}
                <h4 className="card-title">{props.Title}</h4>
                <p className="card-text mb-2">{props.Desc}</p>
                <b className="d-inline-block mb-2">Rs. {props.Price}</b><br />
                <b className="d-inline-block mb-2">Size : {props.Size}</b>
                <Button txt="Add to Cart" {...props} />
            </div>
        </div>
    )
}

export default withRouter(Card);