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
          <legend htmlFor="firstName">First Name</legend>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            onChange={(e) => props.updatePerson('firstName', e.target.value)}
            name="firstName"
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="lastName">Last Name</legend>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            onChange={(e) => props.updatePerson('lastName', e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="title">Professional Title</legend>
          <input
            type="text"
            placeholder="Professional Title"
            id="title"
            onChange={(e) => props.updatePerson('title', e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="summary">Summary</legend>
          <textarea
            type="text"
            placeholder="Professional Summary"
            className="summaryInput"
            id="summary"
            onChange={(e) => props.updatePerson('summary', e.target.value)}
          />
        </fieldset>
      </form>
    </>
  );
}

export default BasicInfo;
