import React from "react";
import "./Contact.css";
import msg_icon from "../../Assets/msg-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import phone_icon from "../../Assets/phone-icon.png";
import location_icon from "../../Assets/location-icon.png";
import white_arrow from "../../Assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9f479342-d3e8-4275-b407-fe9d599bdbd1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Me a message <img src={msg_icon} alt=" " />
        </h3>
        <p>
          I'd love to hear from you! Please feel free to reach out through the
          contact form below or find my contact details listed. As a dedicated
          web developer, I'm committed to providing exceptional service and
          improving the online experience. I look forward to connecting with
          you.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt=" " />
            vinayasagara5@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            8660125123
          </li>
          <li>
            <img src={location_icon} alt=" " />
            Bangalore
            <br /> Karnataka , India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile
     number required"
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your
    message required"
          ></textarea>
          <button type="submit" className="btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
