export default function DisplayEducationForm(props) {
  return (
    <ul className="list eduFormList">
      {props.educationList.map((edu) => {
        return (
          <li key={edu.id}>
            <strong>{edu.degree}</strong>
            <br />
            <em>
              {edu.school} - {edu.graduatedYear}
            </em>
            <button onClick={() => props.deleteListItem(props.name, edu.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
