import { Route, Routes } from 'react-router-dom';
import IndexPage from './charts/components/pages/IndexPage';
// import IndexPage from './components/pages/IndexPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
