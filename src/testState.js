import React from "react";

export default class testState extends React.Component {
    constructor(){
        super()
        this.state = {
            answer: "Yes"
        }
    }
    render() {
        return(
            <div>
                <h1>This state is a {this.state.answer}</h1>
            </div>
        )
    }
}