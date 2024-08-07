import React from 'react'
import { stats, stats_2 } from './partials/Data'
import heroleft from '../assets/images/hero/Portfolio-Hero-Left.webp'
import heroright from '../assets/images/hero/Portfolio-Hero-Right.webp'
import sticker from '../assets/images/hero/sticker.png'


const PortfolioHero = () => {

    return (
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
                <div className="relative">
                    <div className="relative">
                        <img
                            src={heroleft}
                            className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700"
                            alt=""
                        />
                    </div>
                    <div className="absolute md:-end-5 end-0 -bottom-16">
                        <img
                            src={heroright}
                            className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                <div className="lg:ms-5">
                    <h3 className="mb-6 md:text-[26px] text-black text-2xl md:leading-normal leading-normal font-semibold">
                        Explore Our Diverse IT Portfolio
                    </h3>

                    <p className="my-dim-text max-w-xl">
                        Discover our wide range of IT services and solutions, from web and mobile app
                        development to ready-made systems, designed to elevate your business to new
                        heights.
                    </p>


                    <div className="mt-6">
                        <section className="py-28 start-0">
                            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                                <div className="mt-12">
                                    <ul className="md:flex md:flex-wrap md:justify-between gap-4 items-center justify-start">
                                        {stats.map((item, idx) => (
                                            <li key={idx} className="text-center z-10 bg-slate-400 px-6 md:w-1/2 m-2 rounded-lg">
                                                <h2 className="text-xl font-bold text-black text-start">{item.Head}</h2>
                                                <h4 className="text-4xl text-start font-bold">{item.data}</h4>
                                                <p className="text-start text-sm text-black font-medium">{item.title}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12">
                                    <ul className="md:flex md:flex-wrap md:justify-between gap-4 items-start justify-start">
                                        {stats_2.map((item, idx) => (
                                            <li key={idx} className="text-center bg-slate-400 px-6 md:w-1/2 m-2 rounded-lg">
                                                <div className="flex flex-row justify-between">
                                                    <h2 className="text-xl font-bold text-black text-start md:text-start p-2">
                                                        {item.Head.slice(0, 15)} <br /> {item.Head.slice(15)}
                                                    </h2>
                                                    <div className='flex flex-col justify-center'>
                                                        <h4 className="text-4xl text-center font-bold">{item.data}</h4>
                                                        <p className="text-center text-black font-medium">{item.title}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PortfolioHero