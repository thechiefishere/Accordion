import String from "./String";

const Accordion = ({ data }) => {
  return (
    <section>
      <h2>Questions And Answers About Login</h2>
      {data.map((data) => {
        return <String key={data.id} data={data} />;
      })}
    </section>
  );
};

export default Accordion;
