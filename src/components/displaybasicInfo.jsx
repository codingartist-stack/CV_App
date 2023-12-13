export function DisplayBasicInfo(props) {
  return (
    <>
      <h1 key={props.id}>
        {props.firstName} {props.lastName}
      </h1>
      <h2>
        <i>{props.title}</i>
      </h2>
      <p>{props.summary}</p>
    </>
  );
}
