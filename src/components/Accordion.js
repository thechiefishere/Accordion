import String from "./String";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [visible, setVisible] = useState([-1]);
  const [lastId, setLastId] = useState(-1);

  function changeVisibility(id) {
    if (id === lastId) {
      setVisible(-1);
      setLastId(-1);
    } else {
      setVisible(id);
      setLastId(id);
    }
  }

  return (
    <section>
      <h2>Questions And Answers About Login</h2>
      {data.map((data) => {
        return (
          <String
            key={data.id}
            data={data}
            onState={data.id === visible ? true : false}
            changeVisibility={changeVisibility}
          />
        );
      })}
    </section>
  );
};

export default Accordion;
