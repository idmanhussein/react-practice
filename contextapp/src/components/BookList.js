import React, { Component } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Children of Blood and Bone</li>
          <li style={{ background: theme.ui }}>Notes of a Native Son</li>
          <li style={{ background: theme.ui }}>Ultralearning</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
