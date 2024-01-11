export default function DisplayList(props) {
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
