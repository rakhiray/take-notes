import React from "react";
import "./cards.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";

const Cards = (props) => {
  const delCard = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="cards">
        <h1 id="card-title">{props.title}</h1>

        <p id="card-content">{props.text}</p>
        <Button className="btn" onClick={delCard}>
          <DeleteOutlineIcon id="del-icon" />
        </Button>
      </div>
    </>
  );
};

export default Cards;
