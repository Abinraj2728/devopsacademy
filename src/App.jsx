import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import DevOpsRoadmap from './DevOpsRoadmap';
import LessonEngine from './LessonEngine';
import { lessonsData } from './lessons';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. The Landing Page */}
        <Route path="/" element={<Home />} />

        {/* 2. The Roadmap Page */}
        <Route path="/roadmap" element={<DevOpsRoadmap />} />

        {/* 3. The Lesson Engine Page */}
        <Route path="/lesson/:id" element={<LessonEngine lessonsData={lessonsData} />} />
      </Routes>
    </BrowserRouter>
  );
}