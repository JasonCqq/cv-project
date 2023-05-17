import React from "react";
import "../styles/Form.css"

const Form = (props) => {
    const { info, handleChange, onSubmitInfo } = props;

    if(info.isSubmitted === true){
        return;
    } else if(info.isSubmitted !== true){
        return(
            <form className="cv-form" onSubmit={onSubmitInfo}>
            <section className='general-information'>
                <label htmlFor="nameInput">Name</label>
                <input onChange={handleChange} value={info.name} id="nameInput" name="name" type="text"></input>
    
    
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={info.email} id='emailInput' name="email" type="email"></input>
    
                <label htmlFor="phone">Phone Number</label>
                <input onChange={handleChange} value={info.phone} id="phoneInput" name="phone" type="tel"></input>
                <span></span>
            </section>
            
            <section className='educational-information'>
              <label htmlFor="schoolName">School Name</label>
              <input onChange={handleChange} value={info.school} id="schoolInput" name="school" type="text"></input>
    
              <label>Title of Study</label>
              <input onChange={handleChange} value={info.study} name="study" type="text"></input>
    
              <label>Date of Study</label>
              <input onChange={handleChange} value={info.studyDate} name="studyDate" type="date"></input>
              <span></span>
            </section>
    
            <section className='work-information'>
              <label>Company Name</label>
              <input onChange={handleChange} value={info.company}  name="company" type="text"></input>
    
              <label>Position Title</label>
              <input onChange={handleChange} value={info.position}  name="position" type="text"></input>
    
              <label>Description of your contributions</label>
              <textarea onChange={handleChange} value={info.description} name="description" type="text"></textarea>
    
              <label>From</label>
              <input onChange={handleChange} value={info.dateFrom}  name="dateFrom" type="date"></input>
    
              <label>Until</label>
              <input onChange={handleChange} value={info.dateUntil}  name="dateUntil" type="date"></input>
            </section>
    
            <button type="submit">Create CV</button>
          </form>
        )
    }
}

export default Form;