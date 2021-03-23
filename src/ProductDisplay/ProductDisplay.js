import React, { Fragment } from 'react'
import Card from '../Component/Card/Card'
import Logo from '../Assets/Logo.jpg'

const ProductPage = (props) => {
    return (
        <Fragment>
            <div className="row justify-content-around my-2">
                <Card className="col-md" img={Logo} Title="Black Shirt" Desc="This is good shirt" Price="720" />
                <Card className="col-md" img={Logo} Title="Black Shirt" Desc="This is good shirt" Price="720" />
                <Card className="col-md" img={Logo} Title="Black Shirt" Desc="This is good shirt" Price="720" />
                <Card className="col-md" img={Logo} Title="Black Shirt" Desc="This is good shirt" Price="720"/>
                <Card className="col-md" img={Logo} Title="Black Shirt" Desc="This is good shirt" Price="720" />
                <Card className="col-md" img={Logo} Title="Black Shirt" Desc="This is good shirt" Price="720" />
                <Card className="col-md" img={Logo} Title="Black Shirt" Desc="This is good shirt" Price="720" />
                <Card className="col-md" img={Logo} Title="Black Shirt" Desc="This is good shirt" Price="720"/>
            </div>
        </Fragment>
    )
}

export default ProductPage;