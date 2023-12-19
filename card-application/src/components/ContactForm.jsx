import React, { useState } from 'react';
import "../assets/ContactForm.css";
import "../assets/App.css"
import swal from 'sweetalert';

function ContactForm(){
  const [formData, setFormData] = useState({
    id:'',
    subject: '',
    email: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the json-server
      const res = await fetch('http://localhost:3002/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        swal('Message sent successfully!')
        console.log('Message sent successfully:', formData);

        // Optionally, you can reset the form after successful submission
        setFormData({
          id: '',
          subject: '',
          email: '',
          content: '',
        });
      } else {
        console.error('Error sending message:', res.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Content:
          <textarea name="content" value={formData.content} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
