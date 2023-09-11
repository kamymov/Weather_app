import { Route, Routes } from 'react-router';
import './App.css';
import Main from './pages/main';
import { useSelector } from 'react-redux';
import Loading from './helpers/Layout/Loading/loading.layout';



function App() {

  const loadingReducer = useSelector((state) => state.loadingReducer)

  return (
    <>
      {loadingReducer ? <Loading /> : null}
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
