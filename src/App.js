import logo from './logo-plugins.png';
import './App.css';

const LogoStyle = {
  width: '20%',
  marginTop: '132px',
  marginLeft: '288px'
}

function App() {
  return (
 <>
 <div className="App">
        <img src={logo} alt={"logo"} style={LogoStyle} />
        <br />
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="U3WFXQUMPU9NN" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_ZA/i/scr/pixel.gif" width="1" height="1" />
        </form>
    </div>
    </>
  );
}

export default App;
