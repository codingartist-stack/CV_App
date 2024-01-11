export function DisplayPreview(props) {
  return (
    <section className="preview">
      <main>
        <h1 key={props.personInfo.id}>
          {props.personInfo.firstName} {props.personInfo.lastName}
        </h1>
        <h2>
          <i>{props.personInfo.title}</i>
        </h2>
        <p>{props.personInfo.summary}</p>
      </main>
      <aside>
        <p>{props.personInfo.phone}</p>
        <p>{props.personInfo.email}</p>
      </aside>
      <div>
        <h3>Skills</h3>
        <ul>
          {props.skillsList.map((skill) => {
            return <li key={skill.id}>{skill.title}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3>Interests</h3>
        <ul>
          {props.interestList.map((interest) => {
            return <li key={interest.id}>{interest.title}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
