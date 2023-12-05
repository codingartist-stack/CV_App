export function DisplayBasicInfo(props) {
  return (
    <>
      <h1 key={props.id}>
        {props.firstName} {props.lastName}
      </h1>
      <i>{props.title}</i>
      <p>{props.summary}</p>
    </>
  );
}
