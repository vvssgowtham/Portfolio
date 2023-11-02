import React,{useState,useRef} from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();  
  const [formData,setFormData] = useState({name:'',email:'',message:''});
  const handleSubmit = async(e) => {
    e.preventDefault();
    //for getting email
    emailjs.sendForm('service_lqtm3dt', 'template_2h3s7y6', form.current, 'GDfVX-so9aDKYecc_')
      .then(async(result) =>
      { 
        await axios.post('https://portfolio-server-58by.onrender.com/submit-form', formData)
      .then(response =>{
        alert('Message Sent Successfully') ;
      setFormData({name:'',email:'',message:''}); 
    })
      .catch(e => {alert('Error occurred: ' + e);
    });
      }, (error) => {
          console.log(error.text);
      });
      //for backend connection 
  };

    return (
        <>
        <section id="contact">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40 d-flex flex-row">
        <div style={{ overflow: 'hidden', maxWidth: '100%', width: '175em', height: '40em' ,borderRadius : '10px'}} className="p-5">
          <div id="gmap-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
          {/* eslint-disable-next-line */}
            <iframe
              style={{ height: '100%', width: '100%', border: '0' }}
              src="https://www.google.com/maps/embed/v1/place?q=SRKR+Engineering+College,SRKR+Engineering+College,Chinnamiram,Bhimavaram,Andhra+Pradesh,India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
        <form onSubmit={handleSubmit} ref={form}>
        <h2 className="text-white sm:text-4xl text-3xl mb-3 font-medium title-font">
            Hire Me
        </h2>
        <p className="leading-relaxed mb-3">Ready to collaborate? Get in touch via the form below and let's discuss your project. 
        Whether you're looking for a talented developer, a creative problem-solver, or a tech-savvy partner, I'm here to help bring your ideas to life. Share your requirements,
        and let's embark on a journey to turn your vision into a reality.
        </p>
        <div className="form-group">
          <label className="float-left py-1 text-lg font-medium text-white">Name</label>
          <input type="text" 
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
          value={formData.name}
          onChange={(e) => setFormData({...formData,name: e.target.value})} name="user_name"/>
        </div>
        <div className="form-group">
          <label className="float-left py-1 text-lg font-medium text-white">Email</label>
          <input type="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={formData.email}
            onChange={(e) => setFormData({...formData,email: e.target.value})} name="user_email" />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="float-left py-1 text-lg font-medium text-white">Message</label>
          <textarea className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" id="message" style={{height:'95px'}} 
            value={formData.message}
            onChange={(e) => setFormData({...formData,message:e.target.value})} name="message"
          />
        </div>
        <div className="form-group py-3">
        <Button variant="success" type="submit">Submit</Button>
        </div>
      </form>
        </div>
        </section>
        </>
    );
}

export default Contact;