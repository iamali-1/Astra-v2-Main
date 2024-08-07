import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { card_data } from './partials/PortfolioCardData'
import ReactStars from "react-rating-stars-component";



const PorfolioCards = () => {

    const [visibleCardCount, setVisibleCardCount] = useState(3);


    const loadMore = () => {
        setVisibleCardCount(visibleCardCount + 3);
    };

    const hasMoreCards = visibleCardCount < card_data.length;


    return (
        <>
            <section id="projects" className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
                <div className="text-center">
                    <h1 className="text-3xl text-black font-semibold">
                        Astra analytica portfolio
                    </h1>
                    <p className="mt-6 text-black">
                        From web and mobile app development to futuristic services like cloud computing and DevOps services, <p> whatever your project requirement is, we have got you covered.
                            Here is a preview of a shiny </p> track record

                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {card_data.slice(0, visibleCardCount).map((card, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={card.image}
                                    className="scale-110 group-hover:scale-100 transition-all duration-500"
                                    alt=""
                                />
                            </div>

                            <div className="relative p-6">
                                <div className="absolute start-6 -top-4">
                                    <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                                        {card.heading}
                                    </span>
                                </div>

                                <div className="mt-5">
                                    {/* <div className="flex mb-4">
                                        <span className="text-slate-400 text-sm">
                                            <i className="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>
                                            {card.date}
                                        </span>
                                        <span className="text-slate-400 text-sm ms-3">
                                            <i className="uil uil-clock text-slate-900 dark:text-white me-2"></i>
                                            {card.comDate}
                                        </span>
                                    </div> */}

                                    <Link
                                        to={'/portfolio'}
                                        className="title text-black text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                                    >
                                        {card.desc}
                                    </Link>

                                    <div className="flex justify-between items-center mt-5">
                                        <ReactStars
                                            count={5}
                                            size={25}
                                            activeColor="#ffd700"
                                            edit={false}
                                            value={card.rating}
                                        />
                                        <span className="text-black text-sm">
                                            <Link
                                                to={'/portfolio'}
                                                className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                                            >
                                                Read More <i className="uil uil-arrow-right"></i>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {hasMoreCards && (
                    <div className="flex justify-center">
                        <button
                            onClick={loadMore}
                            className="btn mt-7 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </section>
        </>
    )
}

export default PorfolioCards