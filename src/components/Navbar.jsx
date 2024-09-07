import React from 'react'

const Navbar = () => {
  return (
    <>
   <div className="nav">
    <div className="left">
        <h2>Food Recipe</h2>
    </div>
    <div className="search">
        <input type="text" />
    </div>
    <div className="right">
        <div>Indian</div>
        <div>American</div>
        <div>British</div>
        <div>Chinese</div>
        <div>Thai</div>
    </div>
   </div>
    </>
  )
}

export default Navbar