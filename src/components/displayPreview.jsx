export function DisplayPreview({ personInfo }) {
  return (
    <section className="preview">
      <>
        <h1 key={personInfo.id}>
          {personInfo.firstName} {personInfo.lastName}
        </h1>
        <h2>
          <i>{personInfo.title}</i>
        </h2>
        <p>{personInfo.summary}</p>
      </>
    </section>
  );
}
