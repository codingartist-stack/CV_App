export default function DisplayWorkList(props) {
  if (props.workExperience.length === 0) {
    return;
  } else {
    return (
      <div className="list workExperience">
        <h3>{props.name}</h3>
        <ul className="list">
          {props.workExperience.map((job) => {
            return (
              <>
                <li key={job.id}>
                  <p className="bold">{job.jobTitle}</p>
                  <div className="flexGroup">
                    <p className="italic">{job.company}</p>
                    <p className="italic">
                      {job.startDate} - {job.endDate}
                    </p>
                  </div>
                  <p>{job.jobSummary}</p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}
