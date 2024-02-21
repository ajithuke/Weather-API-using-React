import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
        <h1>Weather Forecast</h1>
        <Input /><br></br>
        <Button value="Search" />
        <Card /><br></br>
        <Button value="Refresh" />
    </div>
  );
}

export default App;
