import React from 'react';
import { wordPress_sec, webDev_sec, crm_lms_erp, mobApp, figma } from './partials/Data';


const Logo = () => {
  return (
    <>
   <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
  <div className="mx-auto max-w-screen-xl px-4 rounded-lg">
    <h2 className="mb-8 lg:mb-16 text-3xl tracking-tight leading-tight text-center text-black dark:text-white md:text-4xl font-semibold">Our Clients</h2>
    <p className='text-center text-black mb-8'>Discover our wide range of IT services and solutions, from web and mobile app development <br/> to ready-made systems, designed to elevate your business to new heights.</p>
    <h3 className='text-center text-gray-400 mb-3 text-xl font-bold mt-20'>WordPress Theme Based</h3>
    <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 sm:gap-12 md:gap-16 lg:gap-24 dark:text-gray-400">
      {wordPress_sec.map((item, index) => (
        <a href="#" className="flex justify-center p-2 items-center bg-slate-100" key={index}>
          <img src={item.img} alt={`Company ${index + 1}`} style={{ width: '70%' }} />
        </a>
      ))}
    </div>
  </div>
</section>

<div className='mt-10'>
  <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div className="mx-auto max-w-screen-xl px-4 rounded-lg">
      <h3 className="text-center text-gray-400 mb-3 text-xl font-bold">Web Development & React Native project</h3>
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 sm:gap-12 md:gap-16 lg:gap-24 dark:text-gray-400">
        {webDev_sec.slice(0, 5).map((item, index) => (
          <a href="#" className="flex justify-center items-center p-2 bg-slate-100" key={index}>
            <img src={item.img} alt={`Company ${index + 1}`} style={{ width: '70%' }} />
          </a>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 sm:gap-12 md:gap-16 lg:gap-24 dark:text-gray-400">
        {webDev_sec.slice(5).map((item, index) => (
          <a href="#" className="flex justify-center p-2 items-center mt-8 bg-slate-100" key={index + 5}>
            <img src={item.img} alt={`Company ${index + 6}`} style={{ width: '70%' }} />
          </a>
        ))}
      </div>
    </div>
  </section>
</div>


<div className='mt-10'>
  <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div className="mx-auto max-w-screen-xl px-4 rounded-lg">
      <h3 className="text-center text-gray-400 mb-3 text-xl font-bold">CRM/LMS/ERP</h3>
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 sm:gap-12 md:gap-16 lg:gap-24 dark:text-gray-400">
        {crm_lms_erp.map((item, index) => (
          <a href="#" className="flex justify-center p-2 items-center bg-slate-100" key={index}>
            <img src={item.img} alt={`Company ${index + 1}`} style={{ width: '70%' }} />
          </a>
        ))}
      </div>
    </div>
  </section>
</div>

<div className='mt-10'>
  <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div className="mx-auto max-w-screen-xl px-4 rounded-lg">
      <h3 className="text-center text-gray-400 mb-3 text-xl font-bold">Mobile Application</h3>
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 sm:gap-12 md:gap-16 lg:gap-24 dark:text-gray-400">
        {mobApp.map((item, index) => (
          <a href="#" className="flex justify-center p-2 items-center bg-slate-100" key={index}>
            <img src={item.img} alt={`Company ${index + 1}`} style={{ width: '70%' }} />
          </a>
        ))}
      </div>
    </div>
  </section>
</div>

<div className='mt-10'>
  <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div className="mx-auto max-w-screen-xl px-4 rounded-lg">
      <h3 className="text-center text-gray-400 mb-3 text-xl font-bold">WordPress Figma & PSD to WordPress</h3>
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 sm:gap-12 md:gap-16 lg:gap-24 dark:text-gray-400">
        {figma.map((item, index) => (
          <a href="#" className="flex justify-center p-2 items-center bg-slate-100" key={index}>
            <img src={item.img} alt={`Company ${index + 1}`} style={{ width: '70%' }} />
          </a>
        ))}
      </div>
    </div>
  </section>
</div>
</>
  );
}

export default Logo;
