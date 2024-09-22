import React, { useState } from "react";
import "./ContactBody.css";

const ContactBody = () => {
  const [messageLength, setMessageLength] = useState(0);

  const handleMessageChange = (event) => {
    setMessageLength(event.target.value.length);
  };

  const locations = [
    {
      city: "Cairo, Egypt",
      address:
        "Office 701, 18 Badr Towers, Ring Road, New Maadi, P.O. Box 11742, Cairo, Egypt.",
      phone: "+202 23104085",
      fax: "+202 23104086",
    },
    {
      city: "Riyadh, KSA",
      address:
        "Office 702 To 704 - 707, Al Nemr Center 1, Olaya Road, P.O. Box 286 588, Riyadh 11323, KSA.",
      phone: "+202 23104085",
      fax: "+202 23104086",
    },
    {
      city: "Manama, Bahrain",
      address:
        "Office 402, Building 455, Euro Tower, Road 1010, Block 410, Sanabis Area, P.O. Box 66311, Manama, Bahrain.",
      phone: "+973 17508383",
      fax: "+973 17508384",
    },
    {
      city: "Madinah, KSA",
      address:
        "Office 101, 2058 Rafidah Al Ansariyah St., Al Jamiah, P.O. Box 42351, Madinah, KSA.",
      phone: "+966 14 8240788",
    },
    {
      city: "Khobar, KSA",
      address: "Al-Khobar Al-Jubailyah, Al Khobar 34621, KSA",
    },
    {
      city: "Dammam, KSA",
      address: "Abu Bakr Al-Siddiq Street, Al Nada, Dammam 32271, KSA",
    },
    {
      city: "Amman, Jordan",
      address:
        "Office 301, 142 Al Hurriyah St, Al Muqablayn, P.O. Box 941597, Amman, Jordan.",
      phone: "+962 790687289",
    },
    {
      city: "Dubai, UAE",
      address:
        "Office 301, XL Tower, Business Bay, P.O. Box 123951, Dubai, UAE.",
      phone: "+971 04 2402555",
    },
  ];

  return (
    <section className="contact-body">
      <div className="contact-left">
        <div id="contact-us-first-text">
          <h2>Contact Us</h2>
          <p>
            We can help you with your project and we treat each project like it
            is our very own. We would be happy to connect with you in person,
            phone, email, or videoconference – whatever works best for you.
          </p>
        </div>
        <div>
          <h2>Leave us a Message</h2>
          <p>
            Have questions or want to chat? Fill out our contact form, and we’ll
            put you in touch with the right people.
          </p>
        </div>
        <div class="contact-form-div">
          <form className="contact-form">
            <div className="form-group double">
              <div className="form-item">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" />
              </div>
              <div className="form-item">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                maxLength="512"
                onChange={handleMessageChange}
              ></textarea>
              <div className="character-count">
                {messageLength} of 512 max characters.
              </div>
            </div>
            <button class="contact-form-button" type="submit">
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
              <i class="fas fa-map-marker-alt"></i> {location.address}
            </p>
            {location.phone && (
              <p>
                <i class="fas fa-phone-alt"></i>&nbsp; {location.phone}
              </p>
            )}
            {location.fax && (
              <p>
                <i class="fas fa-fax"></i>&nbsp; {location.fax}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactBody;
