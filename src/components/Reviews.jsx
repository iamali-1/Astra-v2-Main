import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HadiImage from '../assets/Client Logos/Hadi.png';
import BerryImage from '../assets/Client Logos/Berry-BPO.png';
import FreshToHomeImage from '../assets/Client Logos/Fresh-To-Home.png';

const clientReviews = [
  {
    img: HadiImage,
    desc: 'Astra Analytica proved to be flexible and responsive during the end-to-end implementation of CRM and LMS solutions',
    title: "Hadi E-Learning",
    name: "Ceo",
  },
  {
    img: BerryImage,
    desc: 'In addition to the admirable technical expertise shown by Astra Analytica, its developers demonstrated a knowledgeable understanding of laboratory software specifics and integrations.',
    title: "Berry BPO",
    name: "President & CEO",
  },
  {
    img: FreshToHomeImage,
    desc: 'We engaged Astra Analytica as our development partner. We recommend them as an authentic partner with skilled technical specialists on board.',
    title: "Fresh to Home",
    name: "Business Development Director",
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Reviews = () => {
  return (
    <div className="my-8">
      <div className='text-black text-center text-2xl mt-6'>Testimonials</div>
      <Slider {...sliderSettings}>
        {clientReviews.map((review, index) => (
          <div key={index} className="card-wrapper">
            <div className="h-full text-center text-black bg-slate-400 p-4 m-6 rounded-md shadow-md" style={{ height: "100%" }}>
              <img
                alt={`testimonial-${index}`}
                className="w-20 h-20 mb-4 object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={review.img}
              />
              <p className="leading-relaxed text-gray-700">{review.desc}</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-2"></span>
              <h2 className="text-gray-900 font-medium title-font text-lg">{review.title}</h2>
              <p className="text-gray-500 font-bold">{review.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
