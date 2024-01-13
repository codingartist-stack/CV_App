export default function DisplayList(props) {
  if (props.list.length === 0) {
    return;
  } else {
    return (
      <div className={props.name}>
        <h3>{props.name}</h3>
        <ul className="list">
          {props.list.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
