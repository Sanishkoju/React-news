
import React, { useRef, useState, memo } from "react";
import {   div,
  
    Button,
    } from '@mui/material';
  
  import {inputFormElements} from ".././formElements"
  import emailjs from '@emailjs/browser';
  import "../CSS/Form.css"
export const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ifqkbgf', 'template_dv5xmqm', form.current, {
          publicKey: 'vg-0TfzYNilOVcVBv',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
            alert("Form send")
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Error!")
          },
        );
      };
      const margin = { margin: "0 5px" }
  return (
    <section class="contact-form">
        <h2 className="contact-head">Contact us</h2>
    <div className='App container'>
          <div className="form-container">
            <div className="form-header">
              <p>Fill Up The Form</p>
            </div>
            <form ref={form} className="" onSubmit={sendEmail}>
              <p className="detail">Personal Info : </p>
              <div className="grid">
                {
                  inputFormElements.slice(0, 4).map((input, index) => <div className="flex">
                    <input key={index} {...input} />
                  </div>)
                }
              </div>
              <p className="detail">Gender : </p>
              <div className="grid">
                {
                  inputFormElements.slice(4, 6).map((input, index) => <div className="flex">
                    <input id={input.id} {...input} />
                    <label key={index} htmlFor={input.id} >{input.label}</label>
                  </div>)
                }
              </div>
              <p className="detail">Country : </p>
              <div className="grid">
                {
                  inputFormElements.slice(6, 7).map((input, index) => (<div className="flex">
                    <label  htmlFor={input.id} >{input.label}</label>
                    <select key={index} id={input.id}  name={input.name}>
                      {input.value.map(val => 
                      <option value={val}>{val}</option>
                    )}
                    </select>

                  </div>))
                }
              </div>
              <div>
                <div item xs={12} align="right">
                  <Button style={margin} type="reset" variant="outlined" color="primary">Reset</Button>
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </div>

              </div>
            </form>

</div>
    </div>
    </section>
  )
}
