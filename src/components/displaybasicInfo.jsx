export function DisplayBasicInfo({ id, firstName, lastName, title, summary }) {
  return (
    <>
      <h1 key={id}>
        {firstName} {lastName}
      </h1>
      <i>{title}</i>
      <p>{summary}</p>
    </>
  );
}
