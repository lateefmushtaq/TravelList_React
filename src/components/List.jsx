import "./component.css";
import Items from "./Items";

function List({ items, onDeleteItem }) {
  return (
    <div className="list">
      {items.map((item) => (
        <Items item={item} key={item.id} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
}

export default List;
