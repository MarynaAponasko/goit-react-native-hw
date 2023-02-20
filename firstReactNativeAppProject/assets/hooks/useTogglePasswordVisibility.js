import React, { useState } from "react";
export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightText, setRightText] = useState("Show");

  const handlePasswordVisibility = () => {
    if (rightText === "Show") {
      setRightText("Hide");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightText === "Hide") {
      setRightText("Show");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightText,
    handlePasswordVisibility,
  };
};
