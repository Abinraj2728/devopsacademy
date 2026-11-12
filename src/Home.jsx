import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', minHeight: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
      
      {/* 1. TOP NAVIGATION BAR */}
      <nav style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: '#1e293b', borderBottom: '1px solid #334155', gap: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '20px', color: '#38bdf8', cursor: 'pointer' }} onClick={() => navigate('/')}>DevOps Academy</h1>
        <div style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
          <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => navigate('/roadmap')}>Roadmap</span>
          <span style={{ cursor: 'pointer', color: '#94a3b8' }}>Tutorials</span>
          <span style={{ cursor: 'pointer', color: '#94a3b8' }}>Exercises</span>
          <span style={{ cursor: 'pointer', color: '#94a3b8' }}>Certificates</span>
        </div>
      </nav>

      {/* 2. DASHBOARD CONTENT */}
      <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '48px', margin: 0 }}>Hi, Abinraj 👋</h1>
        </div>
        <p style={{ fontSize: '20px', color: '#94a3b8', marginBottom: '40px' }}>
          Keep your streak alive and pick up right where you left off.
        </p>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          <button onClick={() => navigate('/roadmap')} style={{ padding: '12px 24px', backgroundColor: '#04AA6D', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
            Continue Learning
          </button>
          <button onClick={() => navigate('/roadmap')} style={{ padding: '12px 24px', backgroundColor: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
            All Tutorials &gt;
          </button>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {[
            { label: 'Total XP', value: '0', icon: '⚡' },
            { label: 'Day Streak', value: '1', icon: '🔥' },
            { label: 'Weekly League', value: 'Join', icon: '🏆' },
            { label: 'Certificates', value: 'View', icon: '📜' }
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #334155' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{stat.icon}</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '5px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            { title: 'Spaces', desc: 'Build & host', icon: '💻' },
            { title: 'Challenges', desc: 'Test your skills', icon: '🎯' },
            { title: 'Certificates', desc: 'Get certified', icon: '🎓' }
          ].map((card, i) => (
            <div key={i} style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px', border: '1px solid #334155', cursor: 'pointer' }}>
              <div style={{ fontSize: '32px', marginBottom: '15px' }}>{card.icon}</div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{card.title}</h3>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px' }}>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}