import React, { useState } from "react";
import DOMPurify from "dompurify";
import * as yup from "yup";
import "./ContactBody.css";

const ContactBody = () => {
  const [messageLength, setMessageLength] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  // eslint-disable-next-line
  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData((prevData) => ({
      ...prevData,
      [id]: sanitizedValue,
    }));

    if (id === "message") {
      setMessageLength(sanitizedValue.length);
    }
  };
  // Function to post form data to the backend
  const postFormData = async (data) => {
    const formattedData = {
      name: `${data.firstName} ${data.lastName}`,  // Combine first and last name into 'name'
      email: data.email,
      message: data.message
    };
    try {
      const response = await fetch(
        "https://euro-group-5011e47364b0.herokuapp.com/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      if (response.ok) {
        setFormStatus("Your message has been successfully sent!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setMessageLength(0);
      } else {
        setFormStatus(
          "There was an issue submitting your message. Please try again later."
        );
      }
    } catch (error) {
      setFormStatus("Network error. Please try again later.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({}); // Clear errors if validation passes

      // Post the validated data to the backend
      await postFormData(formData);
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  const locations = [
    {
      city: "Riyadh, KSA",
      address:
        "Office 702 To 704 - 707, Al Nemr Center 1, Olaya Road, P.O. Box 286 588, Riyadh 11323, KSA.",
      address_maps: "https://maps.app.goo.gl/5QLDga8wjzWhdboT6",
      phone: "+966 11 464 48 44",
    },
    {
      city: "Cairo, Egypt",
      address:
        "Office 701, 18 Badr Towers, Ring Road, New Maadi, P.O. Box 11742, Cairo, Egypt.",
      address_maps: "https://maps.app.goo.gl/yFSZMM4NR1FPt1LTA",
      phone: "+202 23 104 085",
    },
    {
      city: "Manama, Bahrain",
      address:
        "Office 62, Building 485, Euro Tower, Road 1010, Block 410, Sanabis Area, P.O. Box 60811, Manama, Bahrain.",
      address_maps: "https://maps.app.goo.gl/BWxtKaQNE7CT1QnN6",
      phone: "+973 17 580 380",
    },
    {
      city: "Amman, Jordan",
      address:
        "Office 301, 142 Al Hurriyah Street, Al Muqabalayn, P.O. Box 941 597, Amman, Jordan.",
      phone: "+962 79 506 8729",
    },
    {
      city: "Khobar, KSA",
      address:
        "Office 209, 4381 Custodian of The Two Holy Mosques Road, Al Khobar Al Janubiyah, P.O. Box 34621, Al Khobar, KSA.",
      phone: "+966 13 895 3107",
    },
    {
      city: "Jeddah, KSA",
      address:
        "Office 201, 4687 Hira Street, Al Marwah, P.O. Box 23545, Jeddah, KSA.",
      phone: "+966 12 264 3850",
    },
    {
      city: "Madinah, KSA",
      address:
        "Office 101, 2588 Rafidah Al Ansariyah Street, Al Jamiah, P.O. Box 42351, Al Madinah, KSA.",
      phone: "+966 14 842 0788",
    },
    {
      city: "Dubai, UAE",
      address:
        "Office 1401, XL Tower, Business Bay, P.O. Box 126 351, Dubai, UAE.",
      phone: "+971 04 240 2255",
    },
  ];

  return (
    <section className="contact-body">
      <div className="contact-left">
        {/* <div id="contact-us-first-text">
          <h2>Contact Us</h2>
          <p>
            We can help you with your project and we treat each project like it
            is our very own. We would be happy to connect with you in person,
            phone, email, or videoconference – whatever works best for you.
          </p>
        </div> */}
        <div>
          <h2>Leave us a Message</h2>
          <p>
            Have questions or want to chat? Fill out our contact form, and we’ll
            put you in touch with the right people.
          </p>
        </div>
        <div className="contact-form-div">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group double">
              <div className="form-item">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  onChange={handleInputChange}
                />
                {errors.firstName && (
                  <p className="error-text">{errors.firstName}</p>
                )}
              </div>
              <div className="form-item">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={handleInputChange} />
                {errors.lastName && (
                  <p className="error-text">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={handleInputChange} />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Leave us a Message"
                maxLength="512"
                onChange={handleInputChange}
              ></textarea>
              <div className="character-count">
                {messageLength} of 512 max characters.
              </div>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
            <button className="contact-form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="contact-right">
        {locations.map((location, index) => (
          <div key={index} className="location">
            <h3>{location.city}</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>{" "}
              <a
                href={`${location.address_maps}`}
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                {location.address}
              </a>
            </p>
            {location.phone && (
              <p>
                <i className="fas fa-phone-alt"></i>&nbsp;
                <a href={`tel:${location.phone}`} className="phone-link">
                  {location.phone}
                </a>
              </p>
            )}
            {location.fax && (
              <p>
                <i className="fas fa-fax"></i>&nbsp; {location.fax}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactBody;
