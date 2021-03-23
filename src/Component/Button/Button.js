import React from 'react'
import "./Button.css"

const ProductPage = (props) => {
    return (
        <button className="website-button">{props.txt}</button>
    )
}

export default ProductPage;