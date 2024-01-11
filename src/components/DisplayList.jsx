export default function DisplayList(props) {
  if (props.list.length === 0) {
    return;
  } else {
    return (
      <>
        <h3>{props.name}</h3>
        <ul>
          {props.list.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </>
    );
  }
}
