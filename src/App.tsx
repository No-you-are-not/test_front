import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ViewDocumentPage } from './pages/ViewDocumentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs/view/:token" element={<ViewDocumentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
