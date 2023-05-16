import '../src/styles/App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="App">
        <form className="cv-form">
          <section className='general-information'>
            <div> 
              <label for="nameInput">Name</label>
              <input id="nameInput" name="name" type="text"></input>
            </div>

            <div>
              <label for="email">Email</label>
              <input id='emailInput' name="email" type="email"></input>
            </div>

              <label for="phone">Phone Number</label>
              <input id="phoneInput" name="phone" type="tel"></input>
              <small>Format: 123-456-7890</small>
          </section>

          <section className='educational-information'>
            <label for="schoolName">School Name</label>
            <input id="schoolInput" name="schoolName" type="text"></input>

            <label>Title of Study</label>
            <input type="text"></input>

            <label>Date of Study</label>
            <input></input>
          </section>

          <section className='work-information'>
            <label>Company Name</label>
            <input type="text"></input>

            <label>Position Title</label>
            <input type="text"></input>

            <label>Description of your contributions</label>
            <textarea type="text"></textarea>

            <label>From</label>
            <input></input>

            <label>Until</label>
            <input></input>
          </section>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
