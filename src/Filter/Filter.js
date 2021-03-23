import React from 'react'
import './Filter.css'

const NavBar = (props) => {
    return (
        <div className="main-container">
            <div className="border-top border-bottom p-md-3 p-sm-1">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Men
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Women
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Children
                    </label>
                </div>
            </div>
            <div className="border-bottom p-md-3 p-sm-1">
                <div>
                    <h3>SIZE</h3>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="size" id="size1" />
                    <label className="form-check-label" htmlFor="size1">
                        XXX-L
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="size" id="size2" />
                    <label className="form-check-label" htmlFor="size2">
                        XX-L
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="size" id="size3" />
                    <label className="form-check-label" htmlFor="size3">
                        X-L
                    </label>
                </div>
            </div>
            <div className="border-bottom p-md-3 p-sm-1">
                <div>
                    <h3>COLOURS</h3>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="colour" id="colour1" />
                    <label className="form-check-label" htmlFor="colour1">
                        Men
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="colour" id="colour2" />
                    <label className="form-check-label" htmlFor="colour2">
                        Women
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="colour" id="colour3" />
                    <label className="form-check-label" htmlFor="colour3">
                        Children
                    </label>
                </div>
            </div>
        </div>
    )
}

export default NavBar;