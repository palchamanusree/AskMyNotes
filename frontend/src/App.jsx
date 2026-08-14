import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = async () => {
    if (note.trim() === "") return;

    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const data = await response.json();

      alert(data.message);

      setNotes([...notes, note]);
      setNote("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Ask My Notes</h1>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your note..."
        rows="5"
        cols="50"
      />

      <br />
      <br />

      <button onClick={addNote}>Add Note</button>

      <h2>My Notes</h2>

      {notes.map((n, index) => (
        <div key={index}>
          <p>{n}</p>
        </div>
      ))}
    </div>
  );
}

export default App;