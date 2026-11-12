import { useNavigate, useParams } from 'react-router-dom';
import { lessonsData } from './lessons';
import { useState } from 'react';

export default function CourseLayout() {
  const navigate = useNavigate();
  const { language } = useParams(); // e.g., 'python'
  const [activeLesson, setActiveLesson] = useState(null);

  // Filter lessons by language (e.g., all python lessons)
  const courseLessons = Object.values(lessonsData).filter(l => l.language === language);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', minHeight: '100vh', backgroundColor: '#fff' }}>
      
      {/* TOP BAR */}
      <nav style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: '#1e293b', color: 'white', borderBottom: '1px solid #334155' }}>
        <h1 style={{ margin: 0, fontSize: '20px', color: '#38bdf8', cursor: 'pointer' }} onClick={() => navigate('/')}>DevOps Academy</h1>
        <span style={{ marginLeft: '20px', fontSize: '14px' }}>{language.toUpperCase()} TUTORIAL</span>
      </nav>

      <div style={{ display: 'flex' }}>
        
        {/* LEFT SIDEBAR */}
        <div style={{ width: '250px', backgroundColor: '#f1f5f9', height: 'calc(100vh - 50px)', overflowY: 'auto', borderRight: '1px solid #e2e8f0', padding: '20px 0' }}>
          <h3 style={{ padding: '0 20px', fontSize: '14px', color: '#64748b', textTransform: 'uppercase', marginBottom: '10px' }}>{language} Tutorial</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {courseLessons.length > 0 ? courseLessons.map(lesson => (
              <li 
                key={lesson.id} 
                onClick={() => setActiveLesson(lesson)}
                style={{ 
                  padding: '10px 20px', 
                  cursor: 'pointer', 
                  backgroundColor: activeLesson?.id === lesson.id ? '#e2e8f0' : 'transparent',
                  borderLeft: activeLesson?.id === lesson.id ? '4px solid #04AA6D' : '4px solid transparent',
                  fontSize: '15px'
                }}
              >
                {lesson.title}
              </li>
            )) : <li style={{ padding: '10px 20px', color: '#94a3b8' }}>No lessons yet.</li>}
          </ul>
        </div>

        {/* MAIN CONTENT AREA */}
        <div style={{ flex: 1, padding: '40px 60px', height: 'calc(100vh - 50px)', overflowY: 'auto' }}>
          {activeLesson ? (
            <div>
              <h1 style={{ fontSize: '36px', color: '#111', marginBottom: '20px' }}>{activeLesson.title}</h1>
              <div style={{ backgroundColor: '#e6f4ea', padding: '20px', borderRadius: '8px', marginBottom: '30px', borderLeft: '5px solid #04AA6D' }}>
                <p style={{ margin: 0, fontSize: '18px', color: '#1e293b', lineHeight: '1.6' }}>{activeLesson.explanation}</p>
              </div>
              
              <h3 style={{ fontSize: '24px', color: '#111', marginBottom: '15px' }}>Interactive Exercise</h3>
              <p style={{ fontSize: '16px', color: '#475569', marginBottom: '20px' }}>Ready to try it yourself? Click below to open the live code editor.</p>
              
              <button 
                onClick={() => navigate(`/lesson/${activeLesson.id}`)}
                style={{ padding: '12px 24px', backgroundColor: '#04AA6D', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Start Coding Exercise &gt;
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '100px', color: '#94a3b8' }}>
              <h2>Select a lesson from the sidebar to begin.</h2>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}