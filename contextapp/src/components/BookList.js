import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
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
};

export default BookList;
