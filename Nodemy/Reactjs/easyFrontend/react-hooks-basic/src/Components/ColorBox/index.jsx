import React, { useState } from 'react';
import './ColorBox.scss';
const ColorBox = props => {
    const [color,setColor] = useState(()=>{
        const innitColor = localStorage.getItem('box-color')|| 'deeppink';
        console.log(innitColor);
        return innitColor;
    });
    const getRandomColor =() =>{
        const COLOR_LIST =['deeppink','green','yellow','orange','blue','black','white'];
        const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
        return COLOR_LIST[randomIndex];
    }
    const handleBoxClick = () =>{
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box-color',newColor);
    }
    return (
        <div 
        className="color-box"
        style={{backgroundColor:color}}
        onClick={handleBoxClick}
        >
            ColorBox
        </div>
    )
}

ColorBox.propTypes = {

}

export default ColorBox
