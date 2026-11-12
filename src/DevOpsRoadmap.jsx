import { useCallback } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 300, y: 0 }, data: { label: 'Python', lessonId: 'python-basics' }, style: { background: '#d4edda', border: '2px solid #28a745', borderRadius: '8px', padding: '15px', fontWeight: 'bold', width: '120px', textAlign: 'center' } },
  { id: '2', position: { x: 100, y: 120 }, data: { label: 'JavaScript', lessonId: 'javascript-basics' }, style: { background: '#cce5ff', border: '2px solid #007bff', borderRadius: '8px', padding: '15px', width: '120px', textAlign: 'center' } },
  { id: '3', position: { x: 300, y: 240 }, data: { label: 'Java', lessonId: 'java-basics' }, style: { background: '#f8d7da', border: '2px solid #dc3545', borderRadius: '8px', padding: '15px', width: '120px', textAlign: 'center' } },
  { id: '4', position: { x: 500, y: 120 }, data: { label: 'HTML (Web)', lessonId: 'html-basics' }, style: { background: '#fff3cd', border: '2px solid #ffc107', borderRadius: '8px', padding: '15px', width: '120px', textAlign: 'center' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
];

export default function DevOpsRoadmap({ onSelectLesson }) {
  const onNodeClick = useCallback((event, node) => {
    onSelectLesson(node.data.lessonId);
  }, [onSelectLesson]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f7f9fc' }}>
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}>
        <h1 style={{ fontSize: '28px', margin: 0, color: '#111' }}>Multi-Language Master Roadmap</h1>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '16px' }}>Select a language to start learning.</p>
      </div>

      <ReactFlow nodes={initialNodes} edges={initialEdges} onNodeClick={onNodeClick} fitView>
        <Background color="#ccc" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
}