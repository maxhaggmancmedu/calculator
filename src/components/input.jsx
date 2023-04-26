import '../styles/input.css'
import { useState } from 'react'

export default function Input({updateNumbers, inputValue}) {
    console.log(inputValue)

    return (
        <input type='number' value={inputValue} onChange={updateNumbers}></input>
    )
}