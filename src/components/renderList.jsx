export default function RenderList(listArray) {
  <ul>
    {listArray.map((item) => {
      return (
        <li key={item.id}>
          {item.title}
          <button onClick={() => props.deleteSkill(item.id)}>Delete</button>
        </li>
      );
    })}
  </ul>;
}
