import Accordion from "./components/Accordion";
import { useState } from "react";
import questions from "./data";

function App() {
  const [data, setData] = useState(questions);
  return (
    <main>
      <Accordion data={data} />
    </main>
  );
}

export default App;
