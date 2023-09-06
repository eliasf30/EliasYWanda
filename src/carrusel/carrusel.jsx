import "./carrusel.css"

import React, { useState } from 'react';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import imagen1 from "./images/imagen1.jpg"
import imagen2 from "./images/imagen2.jpg"
import imagen3 from "./images/imagen3.jpg"
import imagen4 from "./images/imagen4.jpg"
import imagen5 from "./images/imagen5.jpg"
import imagen6 from "./images/imagen6.jpg"
import imagen7 from "./images/imagen7.jpg"
import imagen8 from "./images/imagen8.jpg"
import imagen9 from "./images/imagen9.jpg"
import imagen10 from "./images/imagen10.jpg"
import imagen11 from "./images/imagen11.jpg"
import imagen12 from "./images/imagen12.jpg"
import imagen13 from "./images/imagen13.jpg"
import imagen14 from "./images/imagen14.jpg"
import imagen15 from "./images/imagen15.jpg"
import imagen16 from "./images/imagen16.jpg"
import imagen17 from "./images/imagen17.jpg"
import imagen18 from "./images/imagen18.jpg"
import imagen19 from "./images/imagen19.jpg"
import imagen20 from "./images/imagen20.jpg"

export default function Carrusel() {

    const [count, setCount] = useState(1);

    

    return (
        <div className="hero_div" id="Fotos">
            <div className="carrouselDiv">
                <div className="container">
                    <ul className="menu">
                        <li>

                            <a href={`#slide${count}`}>
                                <button disabled={count == 1} onClick={() => setCount(count - 1)} className="button">
                                    <FaArrowLeft className="arrowicon" />
                                </button>
                            </a>
                        </li>



                    </ul>
                    <ul class="slider">
                        <li class="img-li" id="slide1">
                            <img className="image" src={imagen1} />
                        </li>
                        <li class="img-li" id="slide2">
                            <img className="image" src={imagen2} />
                        </li>
                        <li class="img-li" id="slide3">
                            <img className="image" src={imagen3} />
                        </li>
                        <li class="img-li" id="slide4">
                            <img className="image" src={imagen4} />
                        </li>
                        <li class="img-li" id="slide5">
                            <img className="image" src={imagen5} />
                        </li>
                        <li class="img-li" id="slide6">
                            <img className="image" src={imagen6} />
                        </li>
                        <li class="img-li" id="slide7">
                            <img className="image" src={imagen7} />
                        </li>
                        <li class="img-li" id="slide8">
                            <img className="image" src={imagen8} />
                        </li>
                        <li class="img-li" id="slide9">
                            <img className="image" src={imagen9} />
                        </li>
                        <li class="img-li" id="slide10">
                            <img className="image" src={imagen18} />
                        </li>
                        <li class="img-li" id="slide11">
                            <img className="image" src={imagen19} />
                        </li>
                        <li class="img-li" id="slide12">
                            <img className="image" src={imagen12} />
                        </li>
                        <li class="img-li" id="slide13">
                            <img className="image" src={imagen13} />
                        </li>
                        <li class="img-li" id="slide14">
                            <img className="image" src={imagen14} />
                        </li>
                        <li class="img-li" id="slide15">
                            <img className="image" src={imagen15} />
                        </li>
                        <li class="img-li" id="slide16">
                            <img className="image" src={imagen16} />
                        </li>
                        <li class="img-li" id="slide17">
                            <img className="image" src={imagen17} />
                        </li>
                        <li class="img-li" id="slide18">
                            <img className="image" src={imagen10} />
                        </li>
                        <li class="img-li" id="slide19">
                            <img className="image" src={imagen11} />
                        </li>
                        <li class="img-li" id="slide20">
                            <img className="image" src={imagen20} />
                        </li>
                        
                    </ul>

                    <ul className="menu">

                        <li >

                            <a href={`#slide${count}`}>
                                <button disabled={count == 20} onClick={() => setCount(count + 1)} className="button">
                                    <FaArrowRight className="arrowicon" />
                                </button>
                            </a>
                        </li>


                    </ul>
                    


                </div>

                <ul className="menu-responsive">
                        <li>

                            <a href={`#slide${count}`}>
                                <button disabled={count == 1} onClick={() => setCount(count - 1)} className="button">
                                    <FaArrowLeft className="arrowicon" />
                                </button>
                            </a>
                        </li>



                        <li >

                            <a href={`#slide${count}`}>
                                <button disabled={count == 20} onClick={() => setCount(count + 1)} className="button">
                                    <FaArrowRight className="arrowicon" />
                                </button>
                            </a>
                        </li>


                    </ul>
            </div>
        </div>
    )
}