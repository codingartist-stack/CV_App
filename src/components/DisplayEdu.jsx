export default function DisplayEdu(props) {
  if (props.educationList.length === 0) {
    return;
  } else {
    return (
      <div className="education">
        <h3>{props.name}</h3>
        <ul className="list">
          {props.educationList.map((edu) => {
            return (
              <li key={edu.id}>
                <p className="bold">{edu.degree}</p>
                <p className="italic">
                  {edu.school} - {edu.graduatedYear}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
