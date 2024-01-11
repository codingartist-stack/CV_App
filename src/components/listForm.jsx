export default function ListForm(props) {
  return (
    <ul>
      {props.list.map((item) => {
        return (
          <li key={item.id}>
            {item.title}
            <button onClick={() => props.deleteListItem(props.name, item.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
