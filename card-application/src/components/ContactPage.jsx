import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form data saved successfully!');
      } else {
        alert('Failed to save form data');
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactPage;
