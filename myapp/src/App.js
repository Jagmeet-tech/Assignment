import './App.css';
import logo from './assignment1.png';

function App() {
  return (
    <div className="App">
      <div className ='main-container'>
        <div className = "left-container">
        <img style = {{"transform": "skewX(1deg)","backgrounColor" : "#1a535c",}} src = {logo}/>
        </div>
        <div className = "right-container">
          <div className = "textbox">
              <div className = "header">
                <h6 style = {{"color" : "#f8be39","marginLeft":"10px"}}>ALREADY MEMBERS</h6>
                <h6 style = {{"color" : "#e2e2e1","marginRight":"10px"}}>Need help ?</h6>
              </div>
              <div className = "form">
                <input type = "name" placeholder = "Enter Your Name"></input>
                <input type = "password" placeholder = "Enter Your Password" style = {{marginLeft:"15px"}}/>
                <img className = "password" src = "https://img.freepik.com/premium-vector/show-password-icon-eye-symbol-vector-vision-hide-from-watch-icon-secret-view-web-design-element_87543-11126.jpg"/>
                <button>SIGN IN</button>
              </div>
          </div>
          <div className = "botton-section">
            <p style = {{color : "white" ,"margin" : "-2px"}}>Don't have an account yet ? </p>
            <p style = {{color : "#1a535c","margin" : "2px"}}>Create an account</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
