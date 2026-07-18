import React from 'react'

const HomeCompany = () => {
    return (
        <div className='bg-[#F2FDFE]'>
            <section className='max-w-7xl mx-auto px-4 pb-4'>
                <header className='text-center'>
                    <span className='block text-[#E51938] pt-10 mb-10'>TOP RATED COMPANY</span>
                    <h2 className='text-3xl font-black mb-10'>Trusted More that 2500+ <br /> Businesses and Organizations
                    </h2>
                </header>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    <article className='bg-white pb-6 pl-6 pr-6'>
                        <header>
                            <img className='max-w-full h-auto block mx-auto' src="/top-rated1.png" alt="top rated 1" />
                            <h3 className='text-2xl text-center font-black'>Top Rated</h3>
                        </header>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedsd eiusmod tempor.

                        </p>
                    </article>

                    <article className='bg-white pb-6 pl-6 pr-6'>
                        <header>
                            <img className='max-w-full h-auto block mx-auto' src="/top-rated2.png" alt="top rated 2" />
                            <h3 className='text-2xl text-center font-black'>Expert Team</h3>
                        </header>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedsd eiusmod tempor.

                        </p>
                    </article>

                    <article className='bg-white pb-6 pl-6 pr-6'>
                        <header>
                            <img className='max-w-full h-auto block mx-auto' src="/top-rated3.png" alt="top rated 3" />
                            <h3 className='text-2xl text-center font-black'>Proper Plan
                            </h3>
                        </header>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedsd eiusmod tempor.

                        </p>
                    </article>

                    <article className='bg-white pb-6 pl-6 pr-6'>
                        <header>
                            <img className='max-w-full h-auto block mx-auto' src="/top-rated3.png" alt="top rated 3" />
                            <h3 className='text-2xl text-center font-black'>24/7 Support

                            </h3>
                        </header>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedsd eiusmod tempor.

                        </p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default HomeCompany