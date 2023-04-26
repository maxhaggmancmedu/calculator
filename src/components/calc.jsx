import '../styles/calc.css'
import Input from './input'
import React, { useState } from 'react'

// calculate a string sequence https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval

const CalcDisplay = () => {

    const numbersArray = []
    const sevenToNine = []
    const fourTosix = []
    const oneTothree = []
    

    for (let i = 7; i < 10; i++) {
        sevenToNine.push(i);
    }

    for (let i = 4; i < 7; i++) {
        fourTosix.push(i);
    }

    for (let i = 1; i < 4; i++) {
        oneTothree.push(i);
    }

    const handleClick = () => {

    }

    const [inputValue, setInputValue] = useState("")
    const pattern = /^[0-9+\-*/^.\s]+$/;
    
    function updateNumbers (val) {
        if (pattern.test(val.target.value)) {
            setInputValue(val.target.value)
        } else {
            console.log('not valid')
            
        }
        
    }
    
        /* numbersArray.push(sevenToNine, fourTosix, oneTothree);
        console.log(numbersArray)
        const correctOrderNumbersArray = Array.prototype.concat(...numbersArray);
        console.log(correctOrderNumbersArray) */

    const clearInput = () => {
        setInputValue('');
    }

    const evaluateInput = (val) => {
        eval(val.target.value);
        setInputValue(eval) 
        console.log(eval)
    }
    
   return (

    <>  
        <Input inputValue={inputValue} updateNumbers={updateNumbers} evaluateInput={evaluateInput}/>
        <div className="container">
            <div onClick={() => handleClick()} className="button">(</div>
            <div className="button">)</div>
            <div className="button">%</div>
            <div className="button" onClick={clearInput}>CE</div>
            {sevenToNine.map(number => 
                <div className='button' key={number}>{number}</div>
            )}
            <div className="button">÷</div>
            {fourTosix.map(number => 
                <div className='button' key={number}>{number}</div>
            )}
            <div className="button">×</div>
            {oneTothree.map(number => 
                <div className='button' key={number}>{number}</div>
            )}
            <div className="button">-</div>
            <div className="button">0</div>
            <div className="button">.</div>
            <div className="button" onClick={evaluateInput}>=</div>
            <div className="button">+</div>
        </div>
    </>
   ) 
}

export default CalcDisplay