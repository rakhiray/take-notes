import React from "react";
import "./notes.css";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const AddNotes = () => {
  return (
    <>
      <div className="notes">
        <form>
          <input id="input-title" type="text" placeholder="Title" />
          <br />
          <textarea
            id="txtarea"
            name=""
            cols="30"
            rows="5"
            placeholder="Add Note..."
          ></textarea>

          <Button className="btn">
            <AddCircleOutlineIcon id="btn-icon" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddNotes;
