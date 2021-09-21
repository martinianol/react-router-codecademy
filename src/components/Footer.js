import React from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {

  const history = useHistory();

  const goBack = () => {
    history.goBack()
    // imperatively redirect back

  }

  const goForward = () => {
    history.goForward()
    // imperatively redirect forward

  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
