import '../styles/input.css'

export default function Input({updateNumbers, inputValue, evaluateInput, handleKeyDown}) {

    return (
        <input type='text' placeholder='0' value={inputValue} onChange={updateNumbers} onKeyDown={handleKeyDown} autoFocus onBlur={({ target }) => target.focus()}></input>
    )
}