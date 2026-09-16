import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuizSessionProvider } from './context/QuizSessionContext';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { StudyPage } from './pages/StudyPage';
import { ResultsPage } from './pages/ResultsPage';
import { HistoryPage } from './pages/HistoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <QuizSessionProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:mode" element={<QuizPage />} />
          <Route path="/study/:mode" element={<StudyPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </QuizSessionProvider>
    </BrowserRouter>
  );
}
