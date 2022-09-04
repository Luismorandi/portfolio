import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./formMessage.css";
import Loading1 from "../../assets/loading.gif";

export const FormMessage = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    setLoading(false);
    e.preventDefault();

    emailjs
      .sendForm(
        "mailToMe",
        "template_v19zbbe",
        form.current,
        "MP9z8fAt0bFIL51dL"
      )
      .then(
        (result) => {
          alert("todo bien");
          e.target.reset();
          setLoading(true);
        },
        (error) => {
          alert("no todo bien");
        }
      );
  };

  const finish = (e) => {
    e.preventDefault();
    if (name && email && msg === null) {
      console.log("cuidado");
    } else {
      sendEmail(e);
    }
  };

  return (
    <div className="">
      <form ref={form} onSubmit={finish} className="container-form">
        <div className="div-input-cart">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="input-contact inputContact"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="div-input-cart">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="input-contact inputContact"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="div-input-cart">
          <label>Message</label>
          <textarea
            name="message"
            className="input-contact inputContact"
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            type="submit"
            className="input-contact inputContact input-sendmail"
          >
            {loading ? (
              "Enviar"
            ) : (
              <img src={Loading1} alt="" className="icon-loading" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormMessage;
