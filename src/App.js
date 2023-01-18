import logo from './logo.svg';
import './App.css';
import MyChart from './components/MyChart/MyChart';
import AxiosChart from './components/AxiosChart/AxiosChart';

function App() {
  return (
    <div className="App">
      <MyChart></MyChart>
      <AxiosChart></AxiosChart>
    </div>
  );
}

export default App;
