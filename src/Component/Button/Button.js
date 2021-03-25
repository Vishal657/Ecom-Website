import React from 'react'
import "./Button.css"
import alertify from 'alertifyjs'

const ProductPage = (props) => {
    const addToLocalStrorage = () => {
        if (localStorage.getItem('cart')) {
            const prevData = JSON.parse(localStorage.getItem("cart"));
            const currData = {
                img: props.img,
                Title: props.Title,
                Desc: props.Desc,
                Price: props.Price,
                Size: props.Size
            }
            const num = Math.random();
            prevData[num] = currData
            localStorage.setItem('cart',JSON.stringify(prevData))
        } else {
            const num = Math.random();
            localStorage.setItem('cart', JSON.stringify({
                [num]: {
                    img: props.img,
                    Title: props.Title,
                    Desc: props.Desc,
                    Price: props.Price,
                    Size: props.Size
                }
            }))
        }
        alertify.success('Successfully Added to Cart')
    }
    console.log(props.from)
    return (
        (props.from === 'wishlist') ? <button className="btn btn-block btn-danger btn-lg w-100" onClick={() => addToLocalStrorage()}>{props.txt}</button>
        :
        <button className="website-button" onClick={() => addToLocalStrorage()}>{props.txt}</button>
    )
}

export default ProductPage;