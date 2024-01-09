export default function Skills(props) {
  return (
    <>
      <form>
        <h2>Skills</h2>
        <input type="text" name="skills" id={props.id + '-skill'} />
        <button onClick={(e) => props.updatePerson('skills', e.target.value)}>
          Add
        </button>
      </form>
      <div>{props.personInfo.skills}</div>
    </>
  );
}
