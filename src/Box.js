const Box = ({ color , hexValue, isDarkText}) => {
    return (
        <section className="box" style={{
            backgroundColor: color,
            color:isDarkText ? "#000" : "#FFF"
            }}>
            <span>{color ? color : 'No Color'}</span>
            <span>{hexValue ? hexValue : null}</span>
        </section>
    )
}

export default Box;