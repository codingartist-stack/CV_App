export default function DisplayWorkListForm(props) {
  return (
    <ul className="list workFormList">
      {props.workExperience.map((job) => {
        return (
          <>
            <li key={job.id}>
              <p className="bold">{job.jobTitle}</p>
              <div className="flexGroup">
                <p>{job.company}</p>
                <p>
                  {job.startDate} - {job.endDate}
                </p>
              </div>
              <p>{job.jobSummary}</p>
              <button onClick={() => props.deleteListItem(props.name, job.id)}>
                Delete
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
}
