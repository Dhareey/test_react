import OeaConsults from "./components/oeaConsults";
import React from "react";
import Logo from "./components/Logo";

export default class App extends React.Component{
  render(){
    return(
      <div className="background">
        <Logo />
        <OeaConsults />
      </div>
    )
  }
}