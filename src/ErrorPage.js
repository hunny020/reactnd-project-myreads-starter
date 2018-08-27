import React, { Component } from 'react'

class ErrorPage extends Component {
  render() {
    const imageUrl = require("./icons/404_page.jpg");
    return(
      <div>
        <img className="error-bg" src={imageUrl} alt="background image" />
      </div>
    )
  }
}

export default ErrorPage;
