import React from 'react'
import { Searchbar } from './Searchbar'
import './homepage.css'

const Header = () => {
  return (
    <header className="header">
     <h1>
      <span className="span1">I</span>mage{" "}
      <span className="span2">S</span>earch
     </h1>
     <div className="searchbar">
      {" "}
      <Searchbar />{" "}
      </div>
     <h2> Fotos de stock gratis, imágenes libres para descargar</h2>
  </header>
  )
}

export default Header