import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getScreen() {
    try {
      return this.props.screen();
    } catch {
      return "Sorry, this page cannot be found: 404";
    }
  }

  render() {
    return <div className="Content">{this.getScreen()}</div>;
  }
}

export default Content;
