import React, { useState , useEffect } from 'react';
import { ArrowLeft } from "lucide-react";
import Output from "./Components/Output";
import SelectBox from "./Components/SelectBox";
import './Input.css'

function Input(){

    const handleBack = () => {
        window.history.back();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div id="input-body">
            <button onClick={handleBack} className="backButton">
                <ArrowLeft className="backIcon" />
                <span>Back</span>
            </button>
            <SelectBox />
            <Output />
        </div>
    );
}

export default Input