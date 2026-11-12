import { useCallback } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import { useNavigate } from 'react-router-dom';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 300, y: 0 }, data: { label: 'Python', lessonId: 'python-basics' }, style: { background: '#d4edda', border: '2px solid #28a745', borderRadius: '8px', padding: '15px', fontWeight: 'bold', width: '120px', textAlign: 'center' } },
  { id: '2', position: { x: 100, y: 120 }, data: { label: 'JavaScript', lessonId: 'javascript-basics' }, style: { background: '#cce5ff', border: '2px solid #007bff', borderRadius: '8px', padding: '15px', width: '120px', textAlign: 'center' } },
  { id: '3', position: { x: 300, y: 240 }, data: { label: 'Java', lessonId: 'java-basics' }, style: { background: '#f8d7da', border: '2px solid #dc3545', borderRadius: '8px', padding: '15px', width: '120px', textAlign: 'center' } },
  { id: '4', position: { x: 500, y: 120 }, data: { label: 'HTML', lessonId: 'html-basics' }, style: { background: '#fff3cd', border: '2px solid #ffc107', borderRadius: '8px', padding: '15px', width: '120px', textAlign: 'center' } },
  { id: '5', position: { x: 100, y: 360 }, data: { label: 'Linux', lessonId: 'linux-basics' }, style: { background: '#e2e3e5', border: '2px solid #6c757d', borderRadius: '8px', padding: '15px', width: '120px', textAlign: 'center' } },
  { id: '6', position: { x: 500, y: 360 }, data: { label: 'Git', lessonId: 'git-basics' }, style: { background: '#f8d7da', border: '2px solid #dc3545', borderRadius: '8px', padding: '15px', width: '120px', textAlign: 'center' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e2-5', source: '2', target: '5', animated: true },
  { id: 'e3-6', source: '3', target: '6', animated: true },
];

export default function DevOpsRoadmap() {
  const navigate = useNavigate();

  const onNodeClick = useCallback((event, node) => {
    // This converts the label (e.g., "Python") to lowercase ("python")
    // and navigates to the Course Sidebar page (/course/python)
    const language = node.data.label.toLowerCase();
    navigate(`/course/${language}`);
  }, [navigate]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f7f9fc' }}>
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}>
        <button onClick={() => navigate('/')} style={{ marginBottom: '10px', padding: '8px 12px', background: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          ← Back to Dashboard
        </button>
        <h1 style={{ fontSize: '28px', margin: 0, color: '#111' }}>DevOps Master Roadmap</h1>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '16px' }}>Select a language to view its tutorial chapters.</p>
      </div>

      <ReactFlow nodes={initialNodes} edges={initialEdges} onNodeClick={onNodeClick} fitView>
        <Background color="#ccc" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
}