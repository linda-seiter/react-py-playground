import { PythonProvider } from "react-py";
import Codeblock from "./Codeblock";

function App() {
  return (
    <PythonProvider>
      <Codeblock />
    </PythonProvider>
  );
}

export default App;
