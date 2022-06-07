const Box = ({color}) => {
    return (
        <div className="box" style={{backgroundColor:color}}>
            <span>{color ? color : 'No Color'}</span>
        </div>
    )
}

export default Box;