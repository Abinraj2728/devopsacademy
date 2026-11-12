import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import './App.css';

// --- LESSON DATA ---
const lessonData = {
  title: "Python for DevOps: Hello World",
  explanation: "Welcome to DevOps! Python is the most popular scripting language for DevOps.\n\nYour first task is to print a message to the console. In Python, we use the print() function.\n\nType your code in the editor on the right and click 'Run Python Code'.",
  starterCode: "# Type your Python code below\n# Example: print('Hello DevOps')\n\n",
  expectedOutput: "Hello DevOps"
};

function App() {
  const [code, setCode] = useState(lessonData.starterCode);
  const [output, setOutput] = useState("Awaiting execution...");
  const [isRunning, setIsRunning] = useState(false);
  const [pyodide, setPyodide] = useState(null);

  // 1. Load Python (Pyodide) when the page loads
  useEffect(() => {
    async function loadPyodide() {
      try {
        const pyodideInstance = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
        });
        setPyodide(pyodideInstance);
        setOutput("Python environment loaded. Ready to code!");
      } catch (error) {
        console.error("Failed to load Pyodide", error);
        setOutput("Error: Could not load Python environment.");
      }
    }
    loadPyodide();
  }, []);

  // 2. The function that runs the Python code
  const handleRunCode = async () => {
    if (!pyodide) {
      setOutput("Python is still loading, please wait a moment...");
      return;
    }

    setIsRunning(true);
    setOutput("Running...");

    try {
      // Capture Python print statements
      pyodide.runPython(`
        import sys
        import io
        sys.stdout = io.StringIO()
      `);

      // Execute the user's code
      await pyodide.runPythonAsync(code);

      // Get the output
      const stdout = pyodide.runPython("sys.stdout.getvalue()");
      
      // Reset standard output
      pyodide.runPython(`
        sys.stdout = sys.__stdout__
      `);

      setOutput(stdout || "Code ran successfully, but no output was printed.");

      // 3. Grading logic (checking if it matches expected output)
      if (stdout.trim() === lessonData.expectedOutput.trim()) {
        setOutput(stdout + "\n✅ Success! You can move to the next lesson.");
      } else {
        setOutput(stdout + "\n❌ Incorrect output. Expected: " + lessonData.expectedOutput);
      }

    } catch (error) {
      // Catch Python syntax errors
      setOutput("Python Error:\n" + error.message);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="app-container">
      {/* LEFT SIDE: Instructions */}
      <div className="left-panel">
        <h1>{lessonData.title}</h1>
        {lessonData.explanation.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* RIGHT SIDE: Editor & Console */}
      <div className="right-panel">
        
        <div className="editor-container">
          <Editor
            height="100%"
            defaultLanguage="python"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              wordWrap: "on",
            }}
          />
        </div>

        <div className="console-container">
          <h3 style={{ marginBottom: '10px', color: '#fff' }}>Python Output:</h3>
          <pre>{output}</pre>
        </div>

        <div className="controls">
          <button onClick={handleRunCode} disabled={isRunning || !pyodide}>
            {isRunning ? "Running..." : pyodide ? "Run Python Code" : "Loading Python..."}
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;