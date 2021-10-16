const String = ({ data, onState, changeVisibility }) => {
  function decide() {
    changeVisibility(data.id);
  }

  return (
    <article className="basic">
      <div>
        <h3>{data.title}</h3>
        <button onClick={decide}>{onState ? "-" : "+"}</button>
      </div>
      {onState && <p>{data.info}</p>}
    </article>
  );
};

export default String;
