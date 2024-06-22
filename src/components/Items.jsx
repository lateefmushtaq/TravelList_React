import "./component.css";
function Items({ item, onDeleteItem }) {
  return (
    <>
      <ul className="li">
        <li>
          {item.quantity} {item.value}
          <span>
            <button onClick={() => onDeleteItem(item.id)}> ❌</button>
          </span>
        </li>
      </ul>
    </>
  );
}

export default Items;
