import React from 'react'

const Mousehover = () => {
    const mouse  = () =>{
        let div = document.getElementById('div')
        div.style.top = Math.floor(Math.random() *500) + 'px'
        div.style.left = Math.floor(Math.random() *500) + 'px'
        div.style.right = Math.floor(Math.random() *500) + 'px'
    }
  return (
    <div id='div' style={{
        backgroundColor:'blue',
        width: '240px',
        padding:'10px',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        cursor: 'pointer',
        transition: 'background-color 0.5s',
    }}>
      <h1 id='h1' onMouseEnter={mouse}>Hover over me!</h1>
    </div>
  )
}

export default Mousehover