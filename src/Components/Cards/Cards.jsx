import React from "react";
import "./cards.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <h1>title</h1>
        <p>content</p>
        <Button className="btn">
          <DeleteOutlineIcon id="del-icon" />
        </Button>
      </div>
    </>
  );
};

export default Cards;
