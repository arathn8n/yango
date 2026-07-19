import React from 'react'
import Footer from '../Footer'

const Pricing = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto px-4'>
                <header className='text-center'>
                    <span className='text-[#E51938]'>CHOOSE PLAN
                    </span>
                    <h2 className='text-3xl font-black'>Simple Pricing Plan
                    </h2>
                </header>

                <div className='grid grid-cols-1 gap-3.5 md:grid-cols-3'>
                    <article className='border'>
                        <header className='text-white text-center bg-linear-to-r p-5 from-cyan-500 to-blue-500'>
                            <h3>STARTER</h3>
                            <h4>$<span className='text-6xl'>19</span> /month </h4>
                        </header>
                        <ul className='flex flex-col items-center'>
                            <li>5 projects <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Own Analytics Platform <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Get A Free Account <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Chat Support <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Optimize Hashtags <span><i className="fa-solid fa-xmark" style={{ color: "rgb(255, 19, 0)" }}></i></span></li>
                            <li>Account Manager <span><i className="fa-solid fa-xmark" style={{ color: "rgb(255, 19, 0)" }}></i></span></li>

                        </ul>
                    </article>

                    <article className='border'>
                        <header className='text-white text-center p-5 bg-linear-65 from-purple-500 to-pink-500'>
                            <h3>STARTER</h3>
                            <h4>$<span className='text-6xl'>29</span> /month </h4>
                        </header>
                        <ul className='flex flex-col items-center'>
                            <li>5 projects <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Own Analytics Platform <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Get A Free Account <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Chat Support <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Optimize Hashtags <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Account Manager <span><i className="fa-solid fa-xmark" style={{ color: "rgb(255, 19, 0)" }}></i></span></li>

                        </ul>
                    </article>

                    <article className='border'>
                        <header className='text-white text-center p-5 bg-linear-to-b from-indigo-950 via-indigo-900 to-violet-900'>
                            <h3>STARTER</h3>
                            <h4>$<span className='text-6xl'>39</span> /month </h4>
                        </header>
                        <ul className='flex flex-col items-center'>
                            <li>5 projects <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Own Analytics Platform <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Get A Free Account <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Chat Support <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Optimize Hashtags <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>
                            <li>Account Manager <span><i className="fa-solid fa-check" style={{ color: "rgb(99, 230, 190)" }}></i></span></li>

                        </ul>
                    </article>


                </div>
            </section>
            <Footer />
        </>
    )
}

export default Pricing