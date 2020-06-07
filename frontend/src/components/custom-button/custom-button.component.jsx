import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({
  children,
  signInWithGoogle,
  inverted,
  ...otherProps
}) => (
  <button
    className={` ${inverted ? "inverted" : ""}  ${
      signInWithGoogle ? "google-signin" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
