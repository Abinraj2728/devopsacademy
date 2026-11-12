import { useCallback } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import { useNavigate } from 'react-router-dom';
import 'reactflow/dist/style.css';

// 1. Cleaned up the nodes (Removed inline styles, added emojis as icons)
const initialNodes = [
  { 
    id: '1', 
    position: { x: 350, y: 50 }, 
    data: { label: '🐍 Python', lessonId: 'python-basics' } 
  },
  { 
    id: '2', 
    position: { x: 100, y: 200 }, 
    data: { label: '🟨 JavaScript', lessonId: 'javascript-basics' } 
  },
  { 
    id: '3', 
    position: { x: 600, y: 200 }, 
    data: { label: '🌐 HTML', lessonId: 'html-basics' } 
  },
  { 
    id: '4', 
    position: { x: 350, y: 350 }, 
    data: { label: '☕ Java', lessonId: 'java-basics' } 
  },
  { 
    id: '5', 
    position: { x: 100, y: 500 }, 
    data: { label: '🐧 Linux', lessonId: 'linux-basics' } 
  },
  { 
    id: '6', 
    position: { x: 600, y: 500 }, 
    data: { label: '🔀 Git', lessonId: 'git-basics' } 
  },
];

// 2. Made connections smoother
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', animated: true },
  { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', animated: true },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', animated: true },
  { id: 'e3-6', source: '3', target: '6', type: 'smoothstep', animated: true },
];

export default function DevOpsRoadmap() {
  const navigate = useNavigate();

  const onNodeClick = useCallback((event, node) => {
    // Remove the emoji from the label before navigating (e.g., "🐍 Python" -> "python")
    const label = node.data.label.replace(/[^\w\s]/gi, '').trim().toLowerCase();
    navigate(`/course/${label}`);
  }, [navigate]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f8fafc', position: 'relative' }}>
      
      {/* TOP HEADER */}
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10, backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ marginBottom: '15px', padding: '8px 12px', background: '#f1f5f9', color: '#333', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          ← Dashboard
        </button>
        <h1 style={{ fontSize: '24px', margin: 0, color: '#1e293b' }}>DevOps Learning Path</h1>
        <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '14px' }}>Select a module to start learning.</p>
      </div>

      {/* THE MAP */}
      <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges} 
        onNodeClick={onNodeClick} 
        fitView
        defaultEdgeOptions={{ type: 'smoothstep' }} // Makes lines curved
      >
        <Background color="#cbd5e1" gap={20} size={1} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}