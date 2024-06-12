export function Stats({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <em>Start adding some items to your list 🚀</em>
      </div>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {numPacked === numItems ? (
        <em>You got everything! ready to go ✈</em>
      ) : (
        <em>
          You have Packed {numItems} items on your list, You already packed{" "}
          {percentage} %
        </em>
      )}
    </footer>
  );
}
