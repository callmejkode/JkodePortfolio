import React from 'react'
import { BsWordpress,BsArrowRight } from "react-icons/bs";

const WhatIDo = () => {
  return (
    <div className='container-fluid'>
        <p className='pt-5' style={{color:'rgb(255, 54, 54)'}}>FEATURES</p>
        <h2 className='display-3 HeaderLineOne fw-bloder pb-lg-5'>What I Do</h2>
        <div className="card-deck">
  <div className="card">
    <div className="card-body">
      <i className="AboutMeIcons"><BsWordpress/></i>
      <p className="card-text pt-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer cardFooterWhatIDo">
    <i className="AboutMeIcons"><BsArrowRight/></i>
    </div>
  </div>
  <div className="card">
    <div className="card-body card1">
      <i className="AboutMeIcons"><BsWordpress/></i>
      <p className="card-text pt-3">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer cardFooterWhatIDo">
    <i className="AboutMeIcons"><BsArrowRight/></i>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <i className="AboutMeIcons"><BsWordpress/></i>
      <p className="card-tex pt-3">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer cardFooterWhatIDo">
    <i className="AboutMeIcons"><BsArrowRight/></i>
    </div>
  </div>
</div>
    </div>
  )
}

export default WhatIDo