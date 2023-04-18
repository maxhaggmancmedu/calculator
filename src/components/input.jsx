import '../styles/input.css'
import { useState } from 'react'

export default function Input() {

    const [inputValue, setInputValue] = useState("")

    function updateNumbers (val) {
        setInputValue(val.target.value)
        console.log(val.target.value)
    }

    return (
        <input type="number" value={inputValue} onChange={updateNumbers}></input>
    )
}