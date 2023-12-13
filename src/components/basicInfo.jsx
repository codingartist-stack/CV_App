//personal info
//name
//title?
//short blurb about self

function BasicInfo(props) {
  return (
    <>
      <form>
        <h2>Personal Information</h2>
        <fieldset>
          <legend htmlFor={props.id + '-firstName'}>First Name</legend>
          <input
            type="text"
            placeholder="First Name"
            id={props.id + '-firstName'}
            onChange={(e) => props.updatePerson('firstName', e.target.value)}
            name="firstName"
          />
        </fieldset>

        <fieldset>
          <legend htmlFor={props.id + '-lastName'}>Last Name</legend>
          <input
            type="text"
            placeholder="Last Name"
            id={props.id + '-lastName'}
            onChange={(e) => props.updatePerson('lastName', e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor={props.id + '-title'}>Professional Title</legend>
          <input
            type="text"
            placeholder="Professional Title"
            id={props.id + '-title'}
            onChange={(e) => props.updatePerson('title', e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor={props.id + '-summary'}>Summary</legend>
          <textarea
            type="text"
            placeholder="Professional Summary"
            className="summaryInput"
            id={props.id + '-summary'}
            onChange={(e) => props.updatePerson('summary', e.target.value)}
          />
        </fieldset>
      </form>
    </>
  );
}

export default BasicInfo;
