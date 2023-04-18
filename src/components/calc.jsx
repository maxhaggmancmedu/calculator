import '../styles/calc.css'
import Input from './input'
import { useState } from 'react'

const CalcDisplay = () => {

    const numbersArray = []
    const sevenToNine = []
    const fourTosix = []
    const oneTothree = []
    console.log(numbersArray)

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

        /* numbersArray.push(sevenToNine, fourTosix, oneTothree);
        console.log(numbersArray)
        const correctOrderNumbersArray = Array.prototype.concat(...numbersArray);
        console.log(correctOrderNumbersArray) */

   return (

    <>  
        <Input />
        <div className="container">
            <div onClick={() => handleClick()} className="button">(</div>
            <div className="button">)</div>
            <div className="button">%</div>
            <div className="button">CE</div>
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
            <div className="button">=</div>
            <div className="button">+</div>
        </div>
    </>
   ) 
}

export default CalcDisplay