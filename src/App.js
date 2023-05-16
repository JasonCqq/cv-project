import '../src/styles/App.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Information from './components/generalInformation';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: { 
        name: "", 
        email: "",
        phone: "",
        school: "",
        study: "",
        studyDate: "",
        company: "",
        position: "",
        description: "",
        dateFrom: "",
        dateUntil: "",
        id: uniqid() ,
        isSubmitted: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const targetName = target.name;
    
    this.setState({
      info: {
        ...this.state.info,
        [targetName]: value,
      },
    });
  };

  onSubmitInfo = (e) => {
    this.setState({
      info: {
        ...this.state.info,
        isSubmitted: true,
      },
    });
    e.preventDefault();
  };

  renderFormData = () => {
    return <Information infos={this.state.info}/>
  }

  render(){
    return (
      <>
        <form className="cv-form" onSubmit={this.onSubmitInfo}>
          <section className='general-information'>
            <div> 
              <label htmlFor="nameInput">Name</label>
              <input onChange={this.handleChange} value={this.state.info.name} id="nameInput" name="name" type="text"></input>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input onChange={this.handleChange} value={this.state.info.email} id='emailInput' name="email" type="email"></input>
            </div>

              <label htmlFor="phone">Phone Number</label>
              <input onChange={this.handleChange} value={this.state.info.phone} id="phoneInput" name="phone" type="tel"></input>
              <small>Format: 123-456-7890</small>
          </section>

          <section className='educational-information'>
            <label htmlFor="schoolName">School Name</label>
            <input onChange={this.handleChange} value={this.state.info.school} id="schoolInput" name="school" type="text"></input>

            <label>Title of Study</label>
            <input onChange={this.handleChange} value={this.state.info.study} name="study" type="text"></input>

            <label>Date of Study</label>
            <input onChange={this.handleChange} value={this.state.info.studyDate} name="studyDate" type="date"></input>
          </section>

          <section className='work-information'>
            <label>Company Name</label>
            <input onChange={this.handleChange} value={this.state.info.company}  name="company" type="text"></input>

            <label>Position Title</label>
            <input onChange={this.handleChange} value={this.state.info.position}  name="position" type="text"></input>

            <label>Description of your contributions</label>
            <textarea onChange={this.handleChange} value={this.state.info.description} name="description" type="text"></textarea>

            <label>From</label>
            <input onChange={this.handleChange} value={this.state.info.dateFrom}  name="dateFrom" type="date"></input>

            <label>Until</label>
            <input onChange={this.handleChange} value={this.state.info.dateUntil}  name="dateUntil" type="date"></input>
          </section>

          <button type="submit">Submit</button>
        </form>
        {this.state.info.isSubmitted && this.renderFormData()}
      </>
    );
  }
}

export default App;
