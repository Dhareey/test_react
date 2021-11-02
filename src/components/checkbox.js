const CheckBox = ( props ) => {
    return (
        <input type = {props.checkType} name= {props.checkName} value= {props.checkValue} />
    )
}
export default CheckBox