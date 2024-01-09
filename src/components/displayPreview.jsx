export function DisplayPreview({ personInfo }) {
  return (
    <section className="preview">
      <main>
        <h1 key={personInfo.id}>
          {personInfo.firstName} {personInfo.lastName}
        </h1>
        <h2>
          <i>{personInfo.title}</i>
        </h2>
        <p>{personInfo.summary}</p>
      </main>
      <aside>
        <p>{personInfo.phone}</p>
        <p>{personInfo.email}</p>
      </aside>
    </section>
  );
}
