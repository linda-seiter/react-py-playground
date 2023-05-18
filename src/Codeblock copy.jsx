import { useEffect, useState } from "react";
import { usePython } from "react-py";

export default function Codeblock() {
  const code = "print(2+4)";
  const [input, setInput] = useState(code.trimEnd());
  const [showOutput, setShowOutput] = useState(false);
  useEffect(() => {
    setInput(code.trimEnd());
    setShowOutput(false);
  }, [code]);

  const { runPython, stdout, stderr } = usePython();

  function run() {
    alert(input);
    runPython(input);
    setShowOutput(true);
  }

  return (
    <>
      <textarea defaultValue={code}></textarea>
      <input
        type="button"
        value="Run"
        onClick={(e) => {
          e.preventDefault();
          run();
        }}
      />
      {showOutput && (
        <pre>
          <code>{stdout}</code>
          <code>{stderr}</code>
        </pre>
      )}
    </>
  );
}
