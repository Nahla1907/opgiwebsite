// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send email using EmailJS
//     emailjs
//       .send(
//         "your_service_id",      // Replace with your EmailJS Service ID
//         "your_template_id",     // Replace with your EmailJS Template ID
//         {
//           from_name: formData.fullName,
//           phone: formData.phone,
//           subject: formData.subject,
//           message: formData.message,
//           to_email: "opgidjanet@gmail.com",
//         },
//         "your_user_id"          // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           console.log("Email sent:", result.text);
//           alert("✅ Thank you! Your message has been sent.");
//           setFormData({ fullName: "", phone: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error("Error sending email:", error.text);
//           alert("❌ Failed to send message. Please try again.");
//         }
//       );
//   };

//   return (
//     <section className="contact-wrapper">
//       <div className="contact-container">
//         {/* Left side - Contact Form */}
//         <div className="contact-left">
//           <h2>Contact Us</h2>
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               placeholder="Enter your full name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="phone">Phone Number</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="subject">Subject</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               placeholder="Enter subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               placeholder="Write your message here..."
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//         {/* Right side - Map */}
//         <div className="contact-right">
//           <h2>Find Us</h2>
//           <iframe
//             title="OPGI Djanet Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7092427.152866736!2d-1.093161911685734!3d29.774773097908643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x122c370049c4237d%3A0x5f8845f2729fe91f!2sOPGI%20direction%20g%C3%A9n%C3%A9rale%20djanet!5e0!3m2!1sfr!2sdz!4v1756935915540!5m2!1sfr!2sdz"
//             width="600"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:opgidjanet@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        {/* Left side - Contact Form */}
        <div className="contact-left">
          <h2 className="orangeText">CONTACTEZ-NOUS</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Nom complet</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Numéro de téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Envoyer le message</button>
          </form>
        </div>

        {/* Right side - Map */}
        <div className="contact-right">
          <h2>Nous trouver</h2>
          <iframe
            title="OPGI Djanet Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7092427.152866736!2d-1.093161911685734!3d29.774773097908643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x122c370049c4237d%3A0x5f8845f2729fe91f!2sOPGI%20direction%20g%C3%A9n%C3%A9rale%20djanet!5e0!3m2!1sfr!2sdz!4v1756935915540!5m2!1sfr!2sdz"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
