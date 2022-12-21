import logo from './logo.svg';
import './App.css';
import profile from "./image/userimage.png";

function App() {
  return (
    <div className='maindiv'>
      <div className='subdiv'>
        <div>
          <div className='img'>
            <div className='img-container'>
              <img className='profile' src={profile} alt="profile"></img>
            </div>
          </div>
          <div className='login'>
            <h1>Login Page</h1>
          </div>
          <div>
            <form>
              <table cellPadding='10px'>
                <tr>
                  <td>
                    <label className='desc' for='username'>Username : </label>
                  </td>
                  <td>
                    <input className='textbox' type="text" name='username' id='username' placeholder='Enter Username' required></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className='desc' for='password'>Password : </label>
                  </td>
                  <td>
                    <input className='textbox' type="password" name='username' id='username' placeholder='Enter Password' required></input>
                  </td>
                </tr>
                
                <tr>
                  <td colSpan={2}>
                    <button className='desc' type='submit' name='btn' id='btn'><b>Submit</b></button>
                  </td>
                </tr>
              </table>
            </form>
            <div>
            <a href='#'>Forgot password ?</a> Or <a href='#'>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
