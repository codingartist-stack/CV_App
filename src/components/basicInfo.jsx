//personal info
//name
//title?
//short blurb about self

function BasicInfo({
  updateFirstName,
  updateLastName,
  updateTitle,
  updateSummary,
}) {
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
            onChange={(e) => updateFirstName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="lastName">Last Name</legend>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            onChange={(e) => updateLastName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="title">Professional Title</legend>
          <input
            type="text"
            placeholder="Professional Title"
            id="title"
            onChange={(e) => updateTitle(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="summary">Summary</legend>
          <input
            type="text"
            placeholder="Professional Summary"
            className="summaryInput"
            id="summary"
            onChange={(e) => updateSummary(e.target.value)}
          />
        </fieldset>
      </form>
    </>
  );
}

export default BasicInfo;
