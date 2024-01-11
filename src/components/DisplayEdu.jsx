export default function DisplayEdu(props) {
  if (props.educationList.length === 0) {
    return;
  } else {
    return (
      <>
        <h3>{props.name}</h3>
        <ul>
          {props.educationList.map((edu) => {
            return (
              <li key={edu.id}>
                <strong>{edu.degree}</strong>
                <br />
                <em>
                  {edu.school} - {edu.graduatedYear}
                </em>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
