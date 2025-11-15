import React, { useState } from 'react';
import '../stylesheet/Form.scss';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function FormEmailSubscription(){
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const location = useLocation();
  const [formSubmitted, setformSubmitted] = useState(false);

  Object.keys(errors).forEach(key => {
    const element = document.getElementById(key);
    if (element) element.style.borderColor='red';
  })


  const onSubmit = async(data) => {
    // eslint-disable-next-line no-unused-vars
    let response;
    const formData = {
      "submittedAt": Date.now(), 
      "fields": [
          {"name":"email","value": data.email},
        ],
      "context": {
        "pageUri": location.pathname,
        "pageName": "Example page"
      }
    }

    try {
          response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/8684991/779c659d-a399-40c5-9f3f-40727ee708a7', {
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
          <h2>Be a part of my art journey</h2>
          <p>Get monthly updates on the current work, gallery shows and more!</p>
        {Object.keys(errors).length > 0 && <p style={{color: 'red', fontSize: '14px'}}>Please provide your email :)</p> }
        {!formSubmitted ? 
        <form onSubmit={handleSubmit(onSubmit)} id="subscribe-form">
            <input type="text" id="email-subscription" name="email" placeholder="Email*" {...register('email', { required: true })}/> 
          <button type="submit" className="subscribe-btn"><span>Submit</span></button>
      </form> 
    : 
    <div>
      <h3 style={{marginTop: '50px'}}>Thanks for subscribing! </h3>
    </div> }
    </center>
    </div>
   );
}   

export default FormEmailSubscription;
