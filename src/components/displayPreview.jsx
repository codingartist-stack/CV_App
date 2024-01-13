import DisplayList from './DisplayList';
import DisplayEdu from './DisplayEdu';
import DisplayWorkList from './DisplayWorkList';

export function DisplayPreview(props) {
  return (
    <section className="preview">
      <div className="csvDisplay">
        <main className="displayHeader">
          <h1 key={props.personInfo.id} className="personName">
            {props.personInfo.firstName} {props.personInfo.lastName}
          </h1>
          <h2 className="personTitle">{props.personInfo.title}</h2>
        </main>
        <aside className="listInformation displayAside">
          <p className="personalSummary">{props.personInfo.summary}</p>
          <p>
            <span className="lineIcon">phone</span> {props.personInfo.phone}
          </p>
          <p>
            <span className="lineIcon">envelope</span>
            {props.personInfo.email}
          </p>
          <DisplayEdu name="Education" educationList={props.education} />
          <DisplayList name="Skills" list={props.skillsList} />
          <DisplayList name="Interests" list={props.interestList} />
        </aside>
        <DisplayWorkList
          name="Work Experience"
          workExperience={props.workExperience}
        />
      </div>
    </section>
  );
}
