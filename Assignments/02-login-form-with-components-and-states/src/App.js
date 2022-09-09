import { Fragment } from 'react';
import './App.css';
import Input from './Input.js';
import Label from './Label';
import Button from './Button';

function App() {

  return (
    <Fragment>
      <main>
        <h1>Login Form</h1>
        <form action="">
          
          <div className="form-group">
            <Label id="email" text="Email Address" />
            <Input id="email" type="email" />
          </div>

          <div className="form-group">
            <Label id="password" text="Password" />
            <Input id="password" type="password" />
          </div>
          
          <div className='form-group'>
            <Label>
              <Input type="checkbox" /> Remember Me
            </Label>
          </div>
          
          <div>
            <Button text="Sign In" />
          </div>
        </form>
        <div className="form-result">
          <p>
            Email: <strong></strong>
          </p>
          <p>
            Password: <strong></strong>
          </p>
          <p>
            Remember Me: <strong></strong>
          </p>
        </div>
      </main>
      <footer>
      <p>&copy; The Junior Developer Program 2022 - Part 2 Fullstack JavaScript With MERN.</p>
      <p><small>All rights reserved. JassehCodeCamp</small></p>
      </footer>
    </Fragment>
  );
}

export default App;
