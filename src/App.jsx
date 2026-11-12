import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import DevOpsRoadmap from './DevOpsRoadmap';
import LessonEngine from './LessonEngine';
import { lessonsData } from './lessons';

export default function App() {
  return (
    // We use basename to tell React the app lives in the /devopsacademy/ folder
    <HashRouter basename="/devopsacademy">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<DevOpsRoadmap />} />
        <Route path="/lesson/:id" element={<LessonEngine lessonsData={lessonsData} />} />
      </Routes>
    </HashRouter>
  );
}