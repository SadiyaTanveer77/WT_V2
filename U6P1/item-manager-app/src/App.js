import React, { useState, useEffect } from "react";

function App() {
  // State variables
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Effect to log changes in items
  useEffect(() => {
    console.log("Items changed:", items);
  }, [items]);

  // Add or Update Item
  const addItem = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = input;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }

    setInput("");
  };

  // Edit Item
  const editItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  // Delete Item
  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Item Manager</h1>

      <form onSubmit={addItem}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
        />
        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul>
        {items.length === 0 && <p>No items yet.</p>}

        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => editItem(index)}>Edit</button>{" "}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;