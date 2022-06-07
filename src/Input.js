const Input = ({color, handleColorChange}) => {
    return (
        <input
        id="addItem"
                type="text"
                placeholder="Add Item"
                required
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                />
    )
}

export default Input;