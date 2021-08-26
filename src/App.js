import logo from './logo-plugins.png';
import './App.css';

const LogoStyle = {
  marginTop: '160px',
  marginLeft: '360px'
}

function App() {
  return (
    <div className="App">
        <img src={logo} alt={"logo"} style={LogoStyle} />
    </div>
  );
}

export default App;
