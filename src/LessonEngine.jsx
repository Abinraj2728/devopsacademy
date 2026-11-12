import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import TutorPanel from './TutorPanel';
import { useParams, useNavigate } from 'react-router-dom';
import { ClientBox } from 'clientbox';
import './App.css';

const box = new ClientBox();

export default function LessonEngine({ lessonsData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = lessonsData[id];

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Awaiting execution...");
  const [isRunning, setIsRunning] = useState(false);
  const [htmlPreview, setHtmlPreview] = useState("");

  useEffect(() => {
    if (lesson) {
      setCode(lesson.starterCode);
      setOutput("Awaiting execution...");
      setHtmlPreview("");
    }
  }, [lesson]);

  if (!lesson) return <div style={{ padding: '50px' }}>Lesson not found!</div>;

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput("Running...");

    if (lesson.language === "html") {
      setTimeout(() => {
        setHtmlPreview(code);
        if (code.includes("Hello DevOps")) {
          setOutput("✅ HTML structure looks correct! Check the preview tab.");
        } else {
          setOutput("❌ Make sure you include the text 'Hello DevOps'.");
        }
        setIsRunning(false);
      }, 500);
      return;
    }

    try {
      let boxLang = lesson.language;
      let fileName = "main.py";
      
      if (boxLang === "javascript") {
        boxLang = "node";
        fileName = "main.js";
      } else if (boxLang === "java") {
        fileName = "Main.java";
      }

      const result = await box.run(boxLang, {
        files: { [`/${fileName}`]: code },
        entryPoint: `/${fileName}`,
      });

      const stdout = result.stdout || result.stderr || "Error executing code.";
      setOutput(stdout);

      if (stdout.trim() === lesson.expectedOutput.trim()) {
        setOutput(stdout + "\n✅ Perfect! You got it right.");
      } else {
        setOutput(stdout + "\n❌ Try again. Expected: " + lesson.expectedOutput);
      }
    } catch (error) {
      setOutput("Execution Error: " + error.message);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      <div style={{ width: '30%', padding: '30px', backgroundColor: '#fff', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
        <button onClick={() => navigate('/roadmap')} style={{ marginBottom: '20px', padding: '8px 12px', background: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          ← Back to Roadmap
        </button>
        <h1 style={{ fontSize: '22px', marginBottom: '15px', color: '#111' }}>{lesson.title}</h1>
        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#444', whiteSpace: 'pre-wrap' }}>
          {lesson.explanation}
        </p>
      </div>

      <div style={{ width: '45%', display: 'flex', flexDirection: 'column', padding: '15px', backgroundColor: '#1e1e1e' }}>
        <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden' }}>
          <Editor
            height="100%"
            language={lesson.language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            options={{ minimap: { enabled: false }, fontSize: 15, wordWrap: 'on' }}
          />
        </div>
        
        {lesson.language === "html" ? (
          <div style={{ height: '200px', backgroundColor: '#fff', marginTop: '15px', padding: '10px', borderRadius: '8px', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Live Preview:</h3>
            <div dangerouslySetInnerHTML={{ __html: htmlPreview }} />
          </div>
        ) : (
          <div style={{ height: '150px', backgroundColor: '#000', color: '#00ff00', marginTop: '15px', padding: '10px', borderRadius: '8px', fontFamily: 'monospace', overflowY: 'auto' }}>
            <pre style={{ margin: 0 }}>{output}</pre>
          </div>
        )}

        <button 
          onClick={handleRunCode} 
          disabled={isRunning}
          style={{ marginTop: '15px', padding: '12px', backgroundColor: '#04AA6D', color: 'white', fontSize: '16px', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          {isRunning ? "Running..." : "Run Code"}
        </button>
      </div>

      <TutorPanel lesson={lesson} />
      
    </div>
  );
}