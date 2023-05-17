import React, { Component } from 'react';
import uniqid from 'uniqid';
import Information from './components/Information';
import Form from './components/Form';

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
    this.editButtonFunction = this.editButtonFunction.bind(this);
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

  editButtonFunction = () => {
    this.setState({
      info: {
        ...this.state.info,
        isSubmitted: false,
      },
    });
  }

  render(){
    return (
      <>
        <h1>CV GENERATOR</h1>
        <Form
        info={this.state.info}
        handleChange={this.handleChange}
        onSubmitInfo={this.onSubmitInfo}
        />

        <Information
        infos={this.state.info}
        editButtonFunction={this.editButtonFunction}
        />
      </>
    );
  }
}

export default App;
