import React from 'react'
import Navbar from '../components/partials/Navbar'
import Breadcrumbs from '../components/Breadcrumbs'
import PorfolioCards from '../components/PorfolioCards'
import Logo from '../components/Logo'
import PortfolioHero from '../components/PortfolioHero'
import Reviews from '../components/Reviews'
import Footer from '../components/partials/Footer'

const Portfolio = () => {
  return (
    <>
      <Navbar navClass="justify-end nav-light" />


      <Breadcrumbs _title={"Shinny Portfolio"} _from={"Portfolio"} />

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

      <div className="container md:pb-16 pt-16 ">
        <PortfolioHero />
      </div>

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

      <div className="container mt-32 md:pb-16 lg:pb-16">
        <PorfolioCards />
      </div>

      <div className="container md:pb-16">
        <Logo />
      </div>



      <div className="container md:pb-16">
        <Reviews />
      </div>

      <Footer />
    </>
  )
}

export default Portfolio