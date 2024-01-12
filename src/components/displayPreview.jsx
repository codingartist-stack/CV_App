import DisplayList from './DisplayList';
import DisplayEdu from './DisplayEdu';
import DisplayWorkList from './DisplayWorkList';

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
      </main>
      <aside>
        <p>{props.personInfo.summary}</p>
        <p>{props.personInfo.phone}</p>
        <p>{props.personInfo.email}</p>
        <DisplayEdu name="Education" educationList={props.education} />
        <DisplayList name="Skills" list={props.skillsList} />
        <DisplayList name="Interests" list={props.interestList} />
      </aside>

      <DisplayWorkList
        name="Work Experience"
        workExperience={props.workExperience}
      />
    </section>
  );
}
