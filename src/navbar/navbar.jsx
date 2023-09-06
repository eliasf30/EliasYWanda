import "./navbar.css"
import { FaHeart } from 'react-icons/fa'
import { GiSoundOn, GiSoundOff } from 'react-icons/gi'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useRef, useEffect } from "react"

import audio from "./audio/audio.mp3"

export default function Navbar() {


    const [Section, UseSection] = useState("")

    const [reproduciendo, setReproduciendo] = useState(false);
    console.log(reproduciendo)
  const audioRef = useRef(null);




  const toggleReproduccion = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setReproduciendo(true);
    } else {
      audioRef.current.pause();
      setReproduciendo(false);
    }

  };    
  
 


    return (
        <div className="Navbar_div">
            <FaHeart className="heartIcon" />
            <FaHeart className="heartIcon" />
            <FaHeart className="heartIcon" />
            <FaHeart className="heartIcon" />
            <ul className="navbar_ul">
                <Link smooth={true} duration={550} to="Hero">
                    <button onClick={() => UseSection("Inicio")} className="navbar_Button" disabled={Section == "Inicio"}>Inicio</button>
                </Link>
                <Link smooth={true} duration={550} offset={-30} to="cartita">
                    <button onClick={() => UseSection("cartita")} className="navbar_Button" disabled={Section == "cartita"}>Cartita</button>
                </Link>
                <Link smooth={true} duration={550}  to="Fotos">
                    <button onClick={() => UseSection("Fotos")} className="navbar_Button" disabled={Section == "Fotos"}>Fotos</button>
                </Link>
                

            </ul>
            <FaHeart className="heartIcon" />
            <FaHeart className="heartIcon" />
            
            <div className="audio-div">
                
                <audio ref={audioRef} autoPlay >
                    <source src={audio} type="audio/mpeg" />
                    Tu navegador no admite la reproducción de audio.
                </audio>
                <button onClick={toggleReproduccion} className="music-button" >
                    {reproduciendo ? <GiSoundOn className="music-icon"/> : <GiSoundOff className="music-icon"/>}
                </button>
            </div>
        </div>
    )
}