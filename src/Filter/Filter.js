import React, { useState } from 'react'
import './Filter.css'

const NavBar = (props) => {

    const [gender,setGender] = useState(null);
    const [size,setSize] = useState(null);
    const [colour,setColour] = useState(null);

    return (
        <div className="main-container">
            <div className="border-top border-bottom p-md-3 p-sm-1">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                    onClick={()=>setGender("Men")} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Men
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                    onClick={()=>setGender("Women")}  />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Women
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" 
                    onClick={()=>setGender("Children")}  />
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
                    <input className="form-check-input" type="radio" name="size" id="size1"  
                    onClick={()=>setSize("XXX-L")} />
                    <label className="form-check-label" htmlFor="size1">
                        XXX-L
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="size" id="size2"   
                    onClick={()=>setSize("XX-L")}  />
                    <label className="form-check-label" htmlFor="size2">
                        XX-L
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="size" id="size3"   
                    onClick={()=>setSize("X-L")} />
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
                    <input className="form-check-input" type="radio" name="colour" id="colour1"   
                    onClick={()=>setColour("black")} />
                    <label className="form-check-label" htmlFor="colour1">
                        Black
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="colour" id="colour2"    
                    onClick={()=>setColour("blue")} />
                    <label className="form-check-label" htmlFor="colour2">
                        Blue
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="colour" id="colour3"    
                    onClick={()=>setColour("green")} />
                    <label className="form-check-label" htmlFor="colour3">
                        Green
                    </label>
                </div>
            </div>
            <button className="my-2 my-md-3 block"
            onClick={()=>{props.setFilter({gender:gender,colour:colour,size:size})}} >Apply Filter</button>
            <button className="my-2 my-md-3 block" >View My Cart</button>
        </div>
    )
}

export default NavBar;