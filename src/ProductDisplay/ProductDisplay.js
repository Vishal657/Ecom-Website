import React, { Fragment } from 'react'
import Card from '../Component/Card/Card'

const ProductPage = (props) => {
    let arra = []

    if (props.data) {

        props.data.forEach((val, index) => {
            const im = require('../Assets/Men/Blue.jpg').default //val.image
            arra.push(
                <Card className="col-md" img={im} Title={val.Title}
                    Desc={val.Desc} Price={val.Price} Size={val.size} key={"565^&" + index} />
            )
        })
    }

    return (
        <Fragment>
            <div className="row justify-content-around my-2">
                {arra}
            </div>
        </Fragment>
    )
}

export default ProductPage;