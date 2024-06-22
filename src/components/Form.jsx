import { useState } from "react";
import "./component.css";
function Form({ onAddItems }) {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSelect(e) {
    setQuantity(Number(e.target.value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    const newItem = { value, quantity, packed: false, id: Date.now() };
    setValue("");
    setQuantity(1);
    onAddItems(newItem);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p>What do you need for your Trip?📋 🤔</p>
        <input
          onChange={handleChange}
          value={value}
          placeholder="Add Item"
        ></input>
        <select onChange={handleSelect} value={quantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <button>➕ Add</button>
      </form>
    </>
  );
}

export default Form;
