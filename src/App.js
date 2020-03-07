import React from 'react';
import logo from './logo.svg';
import './CSS/App.css';

function App() {
  return (
    <div>
      <span className='nav' />
      <div>
        <h1>App component - home page</h1>
        <h3>splash page</h3>
        <ul>
          <li>What we do</li>
          <ul>
            <li>Stock tracking</li>
            <li>manage you finaces</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default App;
