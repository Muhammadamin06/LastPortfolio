import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { GiSmartphone } from "react-icons/gi";
import { BiMap } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const tg_token = "6595979432:AAHyCadkWcY215pogMpJqackyO9JQ5aw8HI";
const tg_id = "2023424372";

function Contact() {
  const [messages, setMessages] = useState({ name: "", email: "", area: "" });

  const handleChange = (e) => {
    setMessages((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let message = `Ism: ${messages.name} %0AEmail: ${messages.email} %0AXabar: ${messages.area}`;
    fetch(
      `https://api.telegram.org/bot${tg_token}/sendMessage?chat_id=${tg_id}&text=${message}`
    );
    setMessages({ name: "", email: "", area: "" });
  };
  return (
    <div>
      <TypeAnimation
        sequence={["Contacts", 1000]}
        speed={1}
        className="title"
      />
      <div className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.334414867133!2d69.1568459092017!3d41.25805406895322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89c5bb6c0f19%3A0x79b3a4bc13d29575!2z0YPQu9C40YbQsCDQmtC-0LLRg9C90YfQuCwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1691323250059!5m2!1sru!2s"
          width="100%"
          height="150"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact__box">
          <div className="contact__info">
            <Link to={"tel:+998900229748"} className="contact__link">
              <GiSmartphone />
              <span>+998 90 022 97 48</span>
            </Link>
            <Link to={"#!"} className="contact__link">
              <BiMap />
              <span>Uzbekistan</span>
            </Link>
            <Link
              to={"mailto:asusmuhammad00609@gmail.com"}
              className="contact__link"
            >
              <MdOutlineEmail />
              <span>asusmuhammad00609@gmail.com</span>
            </Link>
          </div>
          <form onSubmit={onSubmit} className="contact__form">
            <h3 className="box-title">
              Contact me <span></span>
            </h3>
            <div className="contact__message">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={messages.name}
                onChange={handleChange}
                className="contact__input"
                required
              />
              <textarea
                type="text"
                placeholder="Message"
                name="area"
                value={messages.area}
                onChange={handleChange}
                className="contact__area"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={messages.email}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>
            <button className="contact__send" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
