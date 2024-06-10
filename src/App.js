import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>👜 Far Away 🌴</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) {
      alert("You didn't enter anything");
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };

    <Item item={newItem} />;
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter an Item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function List() {
  return <div className="list"></div>;
}

function Item() {}

function Stats() {
  return (
    <footer className="stats">
      <em>You have Packed X items on your list, You already packed X% </em>
    </footer>
  );
}
