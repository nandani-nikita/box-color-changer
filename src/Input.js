import colorNames from 'colornames';

const Input = ({ color, setColor, setHexValue, isDarkText, setIsDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                id="colorInput"
                type="text"
                placeholder="Type a Color"
                required
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }
            }
            />
            <br></br>
            <button
                type='button'
                onClick={()=>setIsDarkText(!isDarkText)}
            >Toggle Text Color</button>
        </form>
    )
}

export default Input;