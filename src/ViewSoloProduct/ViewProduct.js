import React, { Fragment, useState } from 'react'
import './ViewProduct.css'
import imagegreen from '../Assets/Women/Green.jpg'
import imageBlack from '../Assets/Women/Black.jpg'
import imageBlue from '../Assets/Women/Blue.jpg'
import NavBar from '../Navigation/NavBar'

const ViewProduct = () => {
    const [image, setimage] = useState(imagegreen)
    const [goods] = useState(JSON.parse(localStorage.getItem('soloproduct')))
    return (
        <Fragment>
            <NavBar />

            <div className="container-fluid">
                <div className="row justify-content-around product-slider my-3">
                    <div className="col-md d-flex-column justify-content-center image-container">
                        <img src={image} className="img-fluid mx-auto my-auto p-2" />
                    </div>

                    <div className="col-md product-details">
                        <div className="product-title">
                            <h3 className='Product-name'> {goods.Title}</h3>
                        </div>

                        <div className="product-color">
                            <h5>Color</h5>
                            <div>
                                <div className="available-colors1" onClick={() => setimage(imageBlack)}></div>
                                <div className="available-colors2" onClick={() => setimage(imageBlue)}></div>
                                <div className="available-colors3" onClick={() => setimage(imagegreen)}></div>
                            </div>
                        </div>

                        <div className="shop-product">
                            <a href=""><button className="btn btn-outline-info my-2">Order Bulk Products</button></a>
                            <h5>Price</h5>
                            <div className="shop-now-buttons">
                                <p>Rs. {goods.Price}</p>
                            </div>
                            <h5>Size</h5>
                            <div className="shop-now-buttons">
                                <p>{goods.Size}</p>
                            </div>
                        </div>

                        <div className="product-desc my-2">
                            <h5>Description</h5>
                            <div className="prod-desc">
                                Fusion Flo is an advanced filtration system that is unique in many ways. Fusion Flow design revolves around 3 critical factors: Superior Filtration, Enhanced breathability, and Excellent fit of the mask. It's the mask that offers comfort, lightweight, and is the protective mask.
                                It's the distinctive shape and unique concave design clearly offers an eye-popping fashion-forward look.
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ViewProduct