import React, { Fragment } from 'react'
import NavBar from '../Navigation/NavBar'
import Filter from '../Filter/Filter'
import ProductPage from '../ProductDisplay/ProductDisplay'

const MainPage = (props) => {
    return (
        <Fragment>
            <NavBar />
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-md-2 border-right my-2">
                        <h2 className="pl-md-4">Filters</h2>
                        <Filter />
                    </div>
                    <div className="col-md-10">
                        <ProductPage />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MainPage;