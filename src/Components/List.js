import { useState } from "react";
import { Item } from "./Item";

export function List({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItems;
  if (sortedBy === "input") sortedItems = items;
  else if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
