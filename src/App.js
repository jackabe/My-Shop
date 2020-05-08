import React from "react";
import "./css/App.css";

import Header from "./components/header";
import SideBar from "./components/sidebar";
import Content from "./components/content";
import Home from "./components/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: Home
    };
  }

  changeScreen = screen => {
    this.setState({
      screen
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Layout">
          <SideBar navigate={this.changeScreen} />
          <Content screen={this.state.screen} />
        </div>
      </div>
    );
  }
}

export default App;
