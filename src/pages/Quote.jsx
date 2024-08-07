import Ref, { useState } from "react";
import { Link } from "react-router-dom";
import { Book, Mail, MessageCircle, User } from "react-feather";
import Navbar from "../components/partials/Navbar";
import { toast } from "react-hot-toast";
import Footer from "../components/partials/Footer";

export default function Quote() {
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
  };
  return (
    <>
      <Navbar navClass="justify-end nav-light" />
      <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              Submit Your Support Request
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/">Home</Link>
            </li>

            <li
              className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Quote
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mx-auto text-center">
            <div className="lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-10">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                <form onSubmit={HandleSubmit}>
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <div className="form-icon relative mt-2">
                          <User className="w-4 h-4 absolute top-3 start-4"></User>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-input ps-11"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <div className="form-icon relative mt-2">
                          <Mail className="w-4 h-4 absolute top-3 start-4"></Mail>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-input ps-11"
                            placeholder="Email :"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-left">
                        <label htmlFor="subject" className="font-semibold">
                          Your Question:
                        </label>
                        <div className="form-icon relative mt-2">
                          <Book className="w-4 h-4 absolute top-3 start-4"></Book>
                          <input
                            name="subject"
                            id="subject"
                            className="form-input ps-11"
                            placeholder="Subject :"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="text-left">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <div className="form-icon relative mt-2">
                          <MessageCircle className="w-4 h-4 absolute top-3 start-4"></MessageCircle>
                          <textarea
                            name="comments"
                            id="comments"
                            className="form-input ps-11 h-28"
                            placeholder="Message :"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    onClick={HandleSubmit}
                    className="btn bg-emerald-600  border-emerald-600 hover:border-emerald-700 text-white rounded-md justify-center flex items-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
