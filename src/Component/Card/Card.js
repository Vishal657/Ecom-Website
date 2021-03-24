import React from 'react'
import './Card.css'
import Button from '../Button/Button'

const Card = (props) => {
    return (
        <div className="card p-2 m-2" style={{width: "20rem"}}>
            <img className="card-img-top" src={props.img} alt="Card image cap"/>
            <div className="card-body p-2">
                <h4 className="card-title">{props.Title}</h4>
                <p className="card-text mb-2">{props.Desc}</p>
                <b className="d-inline-block mb-2">Rs. {props.Price}</b><br />
                <b className="d-inline-block mb-2">Size : {props.Size}</b>
                <Button txt="Add to Cart" {...props}/>
            </div>
        </div>
    )
}

export default Card;