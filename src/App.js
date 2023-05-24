import "./App.css";
import Header from "./Components/Header/Header";
import AddNotes from "./Components/Add Notes/AddNotes";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((item, index) => index !== id);
    });
  };

  return (
    <>
      <Header />
      <AddNotes passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Cards
            key={index}
            id={index}
            title={val.title}
            text={val.text}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
