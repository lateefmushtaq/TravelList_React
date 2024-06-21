import "./component.css";

import Items from "./Items";
function List() {
  return (
    <>
      <div className="list">
        <ul>
          <Items title="hello" description="bye" />
        </ul>
      </div>
    </>
  );
}

export default List;
