export default function ListForm(props) {
  return (
    <ul className="list">
      {props.list.map((item) => {
        return (
          <li key={item.id} className="listItem">
            <button onClick={() => props.deleteListItem(props.name, item.id)}>
              Delete
            </button>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}
