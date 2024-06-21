function Items({ title, description }) {
  return (
    <div>
      <ul>
        {" "}
        <li>
          {title}
          <span>
            <button> {description}❌</button>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Items;
