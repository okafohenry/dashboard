import '../src/assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Analysis, Cards, Dashboard, Transaction } from './pages';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='transaction' element={<Transaction />} />
          <Route path='analysis' element={<Analysis />} />
          <Route path='cards' element={<Cards />} />
        </Routes>     
    </div>
  );
}

export default App;
