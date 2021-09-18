import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
export default function Nav({ isOpen, setIsOpen }) {
  function toggleMenu() {
    isOpen ? setIsOpen(!isOpen) : setIsOpen(!isOpen);
  }
  return (
    <div className="nav">
      <h1 className="title">Royal Music</h1>
      <button onClick={toggleMenu} className="open-library">
        Library <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </div>
  );
}
