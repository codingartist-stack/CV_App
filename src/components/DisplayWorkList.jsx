export default function DisplayWorkList(props) {
  if (props.workExperience.length === 0) {
    return;
  } else {
    return (
      <div className="list workExperience">
        <h3>{props.name}</h3>
        <ul>
          {props.workExperience.map((job) => {
            return (
              <li key={job.id}>
                <strong>{job.jobTitle}</strong>
                <div className="flexGroup">
                  <em>{job.company}</em>
                  <em>
                    {job.startDate} - {job.endDate}
                  </em>
                </div>
                <p>{job.jobSummary}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
