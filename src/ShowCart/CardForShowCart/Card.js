import React from 'react'

const MainPageShowCartCard = (props) => {

    const removeElementFromCard = () => {
        const goods = JSON.parse(localStorage.getItem("cart"));
        delete goods[props.id]
        localStorage.setItem('cart',JSON.stringify(goods))
        props.setcards(null)
    }

    return (
        <div className="col-md-4 mt-4 mt-sm-0 card-container">
            <div className="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                <img className="img-fluid d-block mx-auto" src={props.img} alt="Pilot Aviator Glasses Gear Image" />
                <div className="card-body p-4 py-0 h-xs-440p">
                    <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">{props.title}</h5>
                    <p className="price">Rs. {props.price}</p>
                </div>
                <p className="btn w-100 px-4 mx-auto">
                    <input type="submit" className="btn btn-dark btn-lg w-100" name="add-button" value="Remove From Cart" 
                        onClick={()=>removeElementFromCard()}
                    />
                </p>
            </div>
        </div>
    )
}

export default MainPageShowCartCard;