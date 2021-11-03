import React, { useState } from 'react';
import '../stylesheet/Form.scss';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function Form(){
  const { register, handleSubmit, errors } = useForm(); 
  const location = useLocation();
  const [formSubmitted, setformSubmitted] = useState(false);

  Object.keys(errors).map(key => {
    document.getElementById(key).style.borderColor='red';
  })


  const onSubmit = async(data) => {
    // eslint-disable-next-line no-unused-vars
    let response;
    const formData = {
      "submittedAt": Date.now(), 
      "fields": [
          {"name":"firstname","value": data.firstname},
          {"name":"email_subject","value": data.email_subject},
          {"name":"email","value": data.email},
          {"name":"message","value": data.message}
        ],
      "context": {
        "pageUri": location.pathname,
        "pageName": "Example page"
      }
    }

    try {
          response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/8684991/bb9c4069-ced9-49c8-9d67-33144ee65048', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
          setformSubmitted(true)
          } catch(e) {
              console.error("Hubspot error - ", e);
              return e;
          }
  };

    return (
    <div>
        <center>
          <h2>Contact Artist</h2>
          <p>Have any questions? I'm always open to a conversation.</p>
        {Object.keys(errors).length > 0 && <p style={{color: 'red', fontSize: '14px'}}>Please fill in all required fields</p> }
        {!formSubmitted ? 
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="span-half">
              <input type="text" id="firstname" name="firstname" style={{width: '95%', float: 'left'}} placeholder='Your Name*' ref={register({ required: true })}/>
          </div>
          <div className="span-half">
              <input type="text" id="email" name="email" className="span-half" style={{width: '100%'}} placeholder="Email*" ref={register({ required: true })}/> 
          </div>
          <input type="text" id="email_subject" name="email_subject" className="span-full" placeholder="Subject" ref={register}/>
          <textarea rows="8" type="text" id="message" name="message" className="span-full" placeholder='Message*' ref={register({ required: true })}/>
          <button type="submit" className="submit-btn"><span>Submit</span></button>
      </form> 
    : 
    <div>
      <h3 style={{marginTop: '50px'}}>Thanks for submitting the form! <br/>I'll get back to you as soon as I read the email.</h3>
      <a href={location.pathname} style={{ fontSize: '12px'}}> Go back to the form</a>
    </div> }
    </center>
    </div>
   );
}   

export default Form;
