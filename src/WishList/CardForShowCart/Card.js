import React, { Fragment, useRef } from 'react'
import AddToCartButton from '../../Component/Button/Button'
import './Card.css'

const MainPageShowCartCard = (props) => {

    const modelRef = useRef(null);
    const closeRef = useRef(null);

    const openModal = () => {
        modelRef.current.style.display = "block"
    }

    const closeModal = () => {
        modelRef.current.style.display = "none"
    }

    window.onclick = function (event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const removeElementFromCard = () => {
        const goods = JSON.parse(localStorage.getItem("wishlist"));
        delete goods[props.id]
        localStorage.setItem('wishlist', JSON.stringify(goods))
        props.setcards(null)
    }

    return (
        <Fragment>
            <div className="modal" ref={modelRef} id="myModal">
                <div className="modal-content">
                    <span className="close" ref={closeRef} onClick={closeModal}>&times;</span>
                    <img className="img-fluid d-block mx-auto" src={props.img} alt="Pilot Aviator Glasses Gear Image" />
                </div>
            </div>
            <div className="col-md-4 mt-4 mt-sm-0 card-container p-3">
                <div className="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                    <img className="img-fluid d-block mx-auto" src={props.img} alt="Pilot Aviator Glasses Gear Image" onClick={openModal} />
                    <div className="card-body p-4 py-0 h-xs-440p">
                        <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">{props.title}</h5>
                        <p className="price">Rs. {props.price}</p>
                    </div>
                    <p className="btn btn-block mx-auto">
                        <input type="submit" className="btn btn-dark btn-lg w-100" name="add-button" value="Remove From Wish List"
                            onClick={() => removeElementFromCard()}
                        />
                    </p>
                    <p className="btn btn-block mx-auto">
                        <AddToCartButton txt='Add To Cart' {...props} from='wishlist' />
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default MainPageShowCartCard;