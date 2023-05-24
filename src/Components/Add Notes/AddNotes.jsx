import React, { useState } from "react";
import "./notes.css";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddNotes = (props) => {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  const callEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      // console.log(prevData);
      return { ...prevData, [name]: value };
    });
    console.log(note);
  };

  const addNote = () => {
    props.passNote(note);
    setNote({
      title: "",
      text: "",
    });
  };

  return (
    <>
      <div className="notes">
        <form>
          <input
            id="input-title"
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={callEvent}
            autoComplete="off"
          />
          <br />
          <textarea
            id="txtarea"
            cols="30"
            rows="5"
            placeholder="Add Note..."
            name="text"
            value={note.text}
            onChange={callEvent}
          ></textarea>

          <Button className="btn" onClick={addNote}>
            <AddCircleOutlineIcon id="btn-icon" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddNotes;
