import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Hello there!</h1>
      <button className='user-button' onClick={() => navigate('/users')}>User</button>
    </div>
  );
}

export default App;
