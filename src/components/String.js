const String = ({ data }) => {
  return (
    <article>
      <div>
        <h3>{data.title}</h3>
        <button>+</button>
      </div>
      <p>{data.info}</p>
    </article>
  );
};

export default String;
