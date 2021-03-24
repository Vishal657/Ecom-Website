import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../Navigation/NavBar'
import Filter from '../Filter/Filter'
import ProductPage from '../ProductDisplay/ProductDisplay'
import Men from '../Json/Men.json'
import Women from '../Json/Women.json'
import Children from '../Json/Children.json'
import Random from '../Json/Random.json'
import { fiilter } from '../utility/filterAndReturnArray'

const MainPage = (props) => {
    const [filterData, setFilterData] = useState({ gender: null, colour: null, size: null });
    const [ProductPageData, setProductPageData] = useState(Random)
    const [searchedText, setSearched] = useState(null)
    if (searchedText !== null) {
        let arr = []
        Men.forEach((val)=>{
            if(val.Title.toLowerCase() === searchedText.toLowerCase()) arr.push(val); 
        })
        Women.forEach((val)=>{
            if(val.Title.toLowerCase() === searchedText.toLowerCase()) arr.push(val); 
        })
        Children.forEach((val)=>{
            if(val.Title.toLowerCase() === searchedText.toLowerCase()) arr.push(val); 
        })
        setProductPageData(arr)
        setSearched(null)
    }
    useEffect(() => {
        if (filterData.gender === null && filterData.colour === null && filterData.size === null) {
            setProductPageData(Random)
        } else {
            let helper = [];
            helper = fiilter(Men, Women, Children, filterData.size, filterData.gender, filterData.colour)
            console.log(helper)
            setProductPageData(helper)
        }
    }, [filterData])

    return (
        <Fragment>
            <NavBar setSearched={setSearched} />
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-md-2 border-right my-1">
                        <h2 className="pl-md-4">Filters</h2>
                        <Filter setFilter={setFilterData} />
                    </div>
                    <div className="col-md-10">
                        <ProductPage data={ProductPageData} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MainPage;