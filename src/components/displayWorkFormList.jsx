export default function DisplayWorkListForm(props) {
  return (
    <ul className="list workFormList">
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
            <button onClick={() => props.deleteListItem(props.name, job.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
