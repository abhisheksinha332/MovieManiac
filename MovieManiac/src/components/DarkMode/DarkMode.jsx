import React from "react";

import "./DarkMode.css";
import sun from "./Sun.svg";
import moon from "./Moon.svg";

const DarkMode = () => {


    function MyMoon() {
        return <img src={moon} alt="Moon Icon" />;
      }
    function MySun() {
        return <img src={sun} alt="Moon Icon" />;
      }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
               

            </label>
        </div>
    );
};

export default DarkMode;
