//personal info
//name
//title?
//short blurb about self

function BasicInfo(props) {
  return (
    <>
      <form className="basicInfoForm">
        <fieldset className="gridForm">
          <legend>Personal Information</legend>
          <label htmlFor={props.id + '-firstName'}>First Name</label>
          <input
            type="text"
            id={props.id + '-firstName'}
            onChange={(e) => props.updatePerson('firstName', e.target.value)}
            name="firstName"
          />

          <label htmlFor={props.id + '-lastName'}>Last Name</label>
          <input
            type="text"
            id={props.id + '-lastName'}
            onChange={(e) => props.updatePerson('lastName', e.target.value)}
          />

          <label htmlFor={props.id + '-title'}>Professional Title</label>
          <input
            type="text"
            id={props.id + '-title'}
            onChange={(e) => props.updatePerson('title', e.target.value)}
          />

          <label htmlFor={props.id + '-phone'}>Phone Number</label>
          <input
            type="tel"
            id={props.id + '-phone'}
            onChange={(e) => props.updatePerson('phone', e.target.value)}
          />

          <label htmlFor={props.id + '-email'}>Email</label>
          <input
            type="text"
            id={props.id + '-email'}
            onChange={(e) => props.updatePerson('email', e.target.value)}
          />

          <label htmlFor={props.id + '-summary'}>Summary</label>
          <textarea
            type="text"
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
