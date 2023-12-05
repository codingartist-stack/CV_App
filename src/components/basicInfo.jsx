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
            onChange={(e) => props.updateFirstName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="lastName">Last Name</legend>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            onChange={(e) => props.updateLastName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="title">Professional Title</legend>
          <input
            type="text"
            placeholder="Professional Title"
            id="title"
            onChange={(e) => props.updateTitle(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="summary">Summary</legend>
          <input
            type="text"
            placeholder="Professional Summary"
            className="summaryInput"
            id="summary"
            onChange={(e) => props.updateSummary(e.target.value)}
          />
        </fieldset>
      </form>
    </>
  );
}

export default BasicInfo;
