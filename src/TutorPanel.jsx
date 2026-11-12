import { useState } from 'react';

export default function TutorPanel({ lesson }) {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleAsk = () => {
    if (!question) return;

    const newChat = [...chatLog, { role: 'user', text: question }];
    
    let aiResponse = "That's a great question! ";
    
    if (question.toLowerCase().includes('slash') || question.toLowerCase().includes('/')) {
      aiResponse += "The forward slash (/) is the division operator in Python, but in DevOps, it's also used for Linux file paths (like /etc/config). In this lesson: " + lesson.explanation;
    } else if (question.toLowerCase().includes('print')) {
      aiResponse += "The `print()` function outputs text to the screen. It's the most common way to debug your code in DevOps!";
    } else {
      aiResponse += "Based on this lesson, make sure to check your quotes and parentheses! Hint: " + lesson.hints[0];
    }

    setChatLog([...newChat, { role: 'ai', text: aiResponse }]);
    setQuestion("");
  };

  return (
    <div style={{ width: '25%', backgroundColor: '#1e1e2e', color: 'white', display: 'flex', flexDirection: 'column', borderLeft: '1px solid #333' }}>
      
      <div style={{ padding: '15px', borderBottom: '1px solid #333', backgroundColor: '#181825' }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#89b4fa' }}>🤖 AI Tutor</h3>
        <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#a6adc8' }}>Ask me anything about this lesson!</p>
      </div>

      <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {chatLog.length === 0 && (
          <div style={{ color: '#6c7086', fontStyle: 'italic', fontSize: '13px' }}>
            Example: "Why do I need a slash here?" or "What does print do?"
          </div>
        )}
        
        {chatLog.map((msg, index) => (
          <div key={index} style={{ 
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.role === 'user' ? '#89b4fa' : '#313244',
            color: msg.role === 'user' ? '#11111b' : 'white',
            padding: '10px',
            borderRadius: '8px',
            maxWidth: '90%',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{ padding: '15px', borderTop: '1px solid #333', backgroundColor: '#181825' }}>
        <input 
          type="text" 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          placeholder="Ask a question..."
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: 'none', outline: 'none', backgroundColor: '#313244', color: 'white', marginBottom: '10px' }}
        />
        <button onClick={handleAsk} style={{ width: '100%', padding: '10px', backgroundColor: '#a6e3a1', color: '#11111b', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Ask Tutor
        </button>
      </div>
    </div>
  );
}