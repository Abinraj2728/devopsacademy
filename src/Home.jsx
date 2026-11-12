import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', minHeight: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
      
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', borderBottom: '1px solid #1e293b' }}>
        <h1 style={{ margin: 0, fontSize: '24px', color: '#38bdf8' }}>DevOps Academy</h1>
        <button 
          onClick={() => navigate('/roadmap')}
          style={{ padding: '8px 16px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Go to Roadmap
        </button>
      </nav>

      {/* Hero Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 80px)', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '64px', margin: '0 0 20px 0', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Master DevOps Interactively
        </h1>
        <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
          Stop watching tutorials. Start writing code. Learn Python, Java, JavaScript, and DevOps tools with our AI-powered interactive editor.
        </p>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <button 
            onClick={() => navigate('/roadmap')}
            style={{ padding: '16px 32px', fontSize: '18px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s' }}
          >
            Start Learning for Free
          </button>
        </div>
      </div>

    </div>
  );
}