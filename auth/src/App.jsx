//Import react
import React from 'react'

//Import images
import logo from './assets/Abstraction.png'
import weblogo from './assets/webLogo.png'

//CSS Import/Link
import './App.css';

//Declaring the app function
const App = () => {
  //HTML to be returned
  return (
    <div className='page'>
      {/*Left side of the screen*/}
      <div className='left'>
        <img src={weblogo} alt='logo' width='135px' height='117px'></img>
        <h3>Getting Started With VR Creation</h3>
        <img src={logo} alt='logo' width='630.49px' height='673.97px'></img>
      </div>

      {/*Right side of the screen*/}
      <div className='right'>

        <select name="language" id="lang">
          <option value="En">English (UK)</option>
        </select>

        <form>
          
        </form>
      </div>
    </div>
  )
}

export default App