export default function DisplayEducationForm(props) {
  return (
    <ul className="list eduFormList">
      {props.educationList.map((edu) => {
        return (
          <li key={edu.id} className="listItem">
            <div className="listInfo">
              <p className="bold">{edu.degree}</p>
              <p className="italic">
                {edu.school} - {edu.graduatedYear}
              </p>
            </div>
            <button onClick={() => props.deleteListItem(props.name, edu.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
