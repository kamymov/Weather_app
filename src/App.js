import { Route, Routes } from 'react-router';
import './App.css';
import Main from './pages/main';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
}

export default App;
