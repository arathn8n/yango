import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeFeatures from './HomeFeatures'
import HomeAbout from './HomeAbout'
import HomeServices from './HomeServices'
import HomeCompany from './HomeCompany'
import HomeMission from './HomeMission'
import HomeOpinion from './HomeOpinion'

const Home = () => {
    return (
        <>
            <div style={{ backgroundImage: "url('/bg1.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className='max-w-7xl mx-auto grid grid-cols-2 place-items-center p-4 max-md:block '>
                    <section>
                        <header>
                            <h1 className='text-6xl mb-3.5 font-black'>Excellent IT Services For Your Business Success</h1>
                        </header>
                        <p className='mb-3.5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                        </p>
                        <NavLink to="/contact" className="bg-white text-black border block p-2  text-center w-1/4">Contact us</NavLink>
                    </section>

                    <img className='max-w-full' src="/banner1.png" alt="banner" />
                </div>
            </div>

            <HomeFeatures />
            <HomeAbout />
            <HomeServices />
            <HomeCompany />
            <HomeMission />
            <HomeOpinion />

        </>
    )
}

export default Home