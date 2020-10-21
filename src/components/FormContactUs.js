import React, {Component} from 'react';
import '../stylesheet/Form.scss';
import fetch from 'node-fetch';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      form: {}
    }
  }

  componentDidMount(){
  }

  handleFormSubmission = async(e) => {
      e.preventDefault();
    let response;

const formData = {
    "submittedAt": Date.now(), 
    "fields": [
        {"name":"firstname","value":"Yulia"},
        {"name":"email_subject","value":"Yas"},
        {"name":"email","value":"myemailisthis@gmail.com"},
        {"name":"message","value":"my value"}
      ],
  "context": {
    "pageUri": "www.example.com/page",
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
        console.log(response)
    } catch(e) {
        console.error(e);
        return e;
    }
}

  render() {
    return (
    <div>
        <h2>Contact Artist</h2>
        <center><p>Have any questions? I'm always open to a conversation.</p></center>
        <form>
        <div className="span-half">
            <input type="text" id="firstname" name="firstname" style={{width: '95%'}} placeholder='Your Name*'/>
        </div>
        <div className="span-half">
            <input type="text" id="email" name="email" className="span-half" style={{width: '100%'}} placeholder="Email*"/> 
        </div>
        <input type="text" id="email_subject" name="email_subject" className="span-full" placeholder="Subject"/>
        <textarea rows="8" type="text" id="message" name="message" className="span-full" placeholder='Message*'/>
        <button type="submit" onClick={(e)=> this.handleFormSubmission(e)} 
        className="submit-btn"><span>Submit</span></button>
        </form>
    </div>
   );
    }
}   

export default Form;
