/*import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
*/
import jettyData from "./components/testdata";
import JettyInfo from "./JettyInfo";
import React from "react";
/*import testState from "./testState"; */

/*
function App() {
  const Jetty = jettyData.features.map((jetties)=>{
    return(
      <JettyInfo 
        key={jetties.id} 
        name={jetties.properties.name} 
        type={jetties.properties.type} 
        coordinates= {jetties.geometry.coordinates} 
        terminal = {jetties.properties.terminal} />
    )

  })

  return (
    <div className="body">
      const jettyComponents = jettyData.map(jetty)
      <Navbar />
      <Maincontent />
      <Footer />
      <Joke question= "Hello" punchline="Whaaattttt" />
      <Joke question= "Heyyyoooo" punchline = "There you are" />
      <Joke question = "Whats the question" punchline="Ask me again"/>
      <Joke question ="Im doing me" punchline= "Good for you mehn"/>
      <Joke question ="WTF" />
      {Jetty}

    </div>
  );
}

export default App;


export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header username= "Dhareey"/>
        <Greeting />
        <testState />
      </div>
    )
  }
}

class Header extends React.Component{
  render() {
    return(
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hour = date.getHours()
    let timeOfDay

    if (hour < 12){
      timeOfDay = "morning";
    } else if (hour >= 12 && hour < 17){
      timeOfDay = "afternoon";
    } else {
      timeOfDay = 'night'
    }
    return(
      <h1>Good {timeOfDay} to you sir</h1>

    )
  }

}
*/

export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      jetty : jettyData
    }
  }

  render(){
    const jettyList = this.state.jetty.features.map((jetties) => {
      return (
        <JettyInfo  
        key={jetties.id} 
        name={jetties.properties.name} 
        type={jetties.properties.type} 
        coordinates= {jetties.geometry.coordinates} 
        terminal = {jetties.properties.terminal}/>
      )
    
    })
    return (
      <div>
        <p>Hello, You are currently logged {this.state.isLoggedIn ? "in" : "out"}</p>
        {jettyList}
        <div></div>
        </div>
    )
  }
}