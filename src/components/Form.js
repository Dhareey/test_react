import React from 'react'
import CheckBox from './checkbox'

function Form() {
    return (
        <form>
            <CheckBox checkType = "checkbox" checkName= "vacation1" checkValue= "Paris" />
            <span>Paris</span>
            <CheckBox checkType = "checkbox" checkName= "vacation2" checkValue= "London" />
            <span>London</span>
            <CheckBox checkType = "checkbox" checkName= "vacation3" checkValue= "United States of America" />
            <span></span>
        </form>
    )
}

export default Form
