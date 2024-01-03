import React, { useState } from "react";
import "../assets/ContactForm.css";
import "../assets/App.css";
import Swal from "sweetalert2";

function ContactForm() {
  const [formData, setFormData] = useState({
    id: "",
    subject: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in formData) {
      if (key !== "id" && formData[key].trim() === "") {
        Swal.fire(`Please fill-in the ${key} field`);
        return;
      }
    } try {
      const res = await fetch("http://localhost:3002/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        Swal.fire("Mail is successfuly sent to local storage 😊");
        console.log("Message sent successfully:", formData);
        setFormData({
          id: "",
          subject: "",
          email: "",
          content: "",
        });
      } else {
        Swal.fire("Error sending message:", res.statusText);
      }
    } catch (error) {
      Swal.fire("Error sending message", error.message);
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
