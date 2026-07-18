import React from 'react'

const HomeAbout = () => {
    return (
        <div className='relative left-0 top-0 z-0 bg-[#F9F5F2] rounded-l-full'>
            <div className='max-w-7xl mx-auto mt-10'>
                <div className='grid grid-cols-1 gap-3 place-items-center md:grid-cols-2 px-4'>
                    <section>
                        <header>
                            <span className='text-[#E51938] block mb-3.5'>ABOUT US</span>
                            <h2 className='text-3xl mb-3.5'>We Offer Professional IT Solutions For Business
                            </h2>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </section>

                    <img src="/about1.png" alt="about" />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout