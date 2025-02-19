import React, { useState } from "react";
import contact from "../assets/images/svg/contact.svg";

import { Link } from "react-router-dom";
import Navbar from "../components/partials/Navbar";
import { toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import Footer from "../components/partials/Footer";

const emailServiceConfig = {
  serviceId: "service_j9x7emr",
  templateId: "template_kdwdz4h",
};


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return toast.error("Name is required!");
    if (!email) return toast.error("Email is required!");
    if (!subject) return toast.error("Subject is required!");
    if (!message) return toast.error("Message is required!");
    toast.success("Your message has been sent :)");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    // Compose the email parameters
    // const emailParams = {
    //   to_email: email,
    //   subject: subject,
    //   message: message,
    //   from_name: name,
    // };

    // // Send the email
    // emailjs
    //   .send(
    //     emailServiceConfig.serviceId,
    //     emailServiceConfig.templateId,
    //     emailParams,
    //     "OdDxhBWGLa3BDz-C2"
    //   )
    //   .then(
    //     (response) => {
    // toast.success("Your message has been sent :)");
    // setName("");
    // setEmail("");
    // setSubject("");
    // setMessage("");
    //     },
    //     (error) => {
    //       console.error("Email could not be sent:", error);
    //       toast.error("An error occurred. Please try again later.");
    //     }
    //   );
  };

  return (
    <>
      <Navbar navClass="justify-end nav-dark" />
      {/* <div className="container-fluid relative mt-20">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              title="contact-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
              style={{ border: 0 }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div> */}
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src={contact} alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-semibold">
                    Get in touch !
                  </h3>

                  <form onSubmit={HandleSubmit}>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-input mt-2"
                          placeholder="Name :"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="lg:col-span-6 mb-5">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-input mt-2"
                          placeholder="Email :"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label htmlFor="subject" className="font-semibold">
                          Your Question:
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-input mt-2"
                          placeholder="Subject :"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </div>

                      <div className="mb-5">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-input mt-2 textarea"
                          placeholder="Message :"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn bg-emerald-600 text-white rounded-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="w-14 h-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <i className="uil uil-phone"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Phone</h5>
                <div className="mt-3">
                  <Link
                    to="tel:+971551564144"
                    className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
                  >
                    +971 55 156 4144
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="w-14 h-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <i className="uil uil-envelope"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Email</h5>

                <div className="mt-3">
                  <Link
                    to="mailto:contact@astra-analytica.com"
                    className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
                  >
                    contact@astra-analytica.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="w-14 h-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <i className="uil uil-map-marker"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Location</h5>
                <p className="text-slate-400 mt-3">
                  ASTRA ANALYTICA CORPORATION 134 STUART AVE STE B11 VALLEY
                  STREAM, NY 11580
                </p>

                <div className="mt-5">
                  {/* <Link
                    to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    data-type="iframe"
                    className="video-play-icon read-more lightbox btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
                  >
                    View on Google map
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
