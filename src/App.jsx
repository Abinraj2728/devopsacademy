import { useState } from 'react';
import DevOpsRoadmap from './DevOpsRoadmap';
import LessonEngine from './LessonEngine';
import { lessonsData } from './lessons';

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState(null);

  return (
    <div>
      {activeLessonId ? (
        <LessonEngine 
          lesson={lessonsData[activeLessonId]} 
          onBack={() => setActiveLessonId(null)} 
        />
      ) : (
        <DevOpsRoadmap onSelectLesson={(id) => setActiveLessonId(id)} />
      )}
    </div>
  );
}