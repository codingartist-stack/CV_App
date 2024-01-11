import DisplayList from './DisplayList';
import DisplayEdu from './DisplayEdu';

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
      <DisplayList name="Skills" list={props.skillsList} />
      <DisplayList name="Interests" list={props.interestList} />
      <DisplayEdu name="Education" educationList={props.education} />
    </section>
  );
}
