import { useState } from "react";
import mission from "../assets/images/mission.avif";
import vision from "../assets/images/vision.jpg";

export default () => {
  const testimonials = [
    {
      name: "Mission",
      title: "The mission we are on",
      quote:
        "Astra’s mission is to empower your business with cutting-edge cloud computing solutions that can not only transform your business but can take it to new heights. Astra, being the top cloud service provider in the US, is on a mission to declutter all your complicated digital problems.",
      image: mission,
    },
    {
      name: "Vision",
      title: "The vision we perceived",
      quote:
        "We have hit the market with a vision to comprehend and decipher all your IT needs. So we can help your business grow and reach new heights with our unparalleled IT services and scalable ready-made projects.",
      image: vision,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState("Mission");

  const handleTestimonialClick = (name) => {
    setCurrentTestimonial(name);
  };

  return (
    <>
      <h1 className="text-2xl ml-4 font-bold text-center">Mission & Vision</h1>
      <div className="mt-2">
        <ul className="flex gap-x-3 justify-end">
          {testimonials.map((item) => (
            <li key={item.name}>
              <button
                className={`btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white w-full md:w-auto ${currentTestimonial === item.name ? "bg-emerald-700" : ""
                  }`}
                onClick={() => handleTestimonialClick(item.name)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <section className="m-4 rounded-lg shadow-lg relative overflow-hidden">
        {/* Blurred Background */}
        {/* <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${mission})`, filter: 'blur(4px)' }}
  ></div> */}

        {/* Content */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-20 relative z-10">
          <div className="max-w-1xl mx-auto text-center">
            <ul>
              {testimonials.map((item) => (
                <li key={item.name}>
                  {currentTestimonial === item.name && (
                    <figure className="md:flex p-5 items-center">
                      {/* Image on the left */}
                      <div className="flex-shrink-0 mx-5">
                        <img
                          src={item.image}
                          alt=""
                          className="h-32 w-32 rounded-lg"
                        />
                      </div>

                      {/* Title and quote on the right */}
                      <blockquote className="p-8 flex-grow justify-center">
                        <p className="text-emerald-600 text-2xl font-bold sm:text-1xl text-center mt-4">
                          {item.title}
                        </p>
                        <p
                          style={{ textAlign: "justify" }}
                          className="text-primary2 text-lg font-normal sm:text-2xl py-2 max-w-xl mx-auto overflow-hidden"
                        >
                          “{item.quote}“
                        </p>
                      </blockquote>
                    </figure>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
