import React from 'react'

const HomeFeatures = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center mt-10 px-4'>
                <img className='max-w-full h-auto' src="/features.jpg" alt="features" />

                <section>
                    <header>
                        <span className='text-[#E51938] mb-3.5 block'>OUR FEATURES</span>
                        <h2 className='mb-3.5 text-4xl'>Best Services Features! It’s More Affordable Than You Think
                        </h2>
                    </header>

                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                        <article className='p-8 bg-[#F8F8F8] hover:bg-[#E51938] hover:text-white transition-all duration-300 ease-in-out'>
                            <header>
                                <i className="fa-solid fa-gear fa-2xl"></i>
                                <h3 className='text-2xl'>IT Management
                                </h3>
                            </header>
                            <p>It is a long established fact that a reader will be distracted by the readable content.

                            </p>
                        </article>

                        <article className='p-8 bg-[#F8F8F8] hover:bg-[#E51938] hover:text-white transition-all duration-300 ease-in-out'>
                            <header>
                                <i className="fa-solid fa-cloud fa-2xl"></i>
                                <h3 className='text-2xl'>Cloud Security
                                </h3>
                            </header>
                            <p>It is a long established fact that a reader will be distracted by the readable content.

                            </p>
                        </article>

                        <article className='p-8 bg-[#F8F8F8] hover:bg-[#E51938] hover:text-white transition-all duration-300 ease-in-out'>
                            <header>
                                <i className="fa-solid fa-shield fa-2xl"></i>
                                <h3 className='text-2xl'>Data Security
                                </h3>
                            </header>
                            <p>It is a long established fact that a reader will be distracted by the readable content.

                            </p>
                        </article>

                        <article className='p-8 bg-[#F8F8F8] hover:bg-[#E51938] hover:text-white transition-all duration-300 ease-in-out'>
                            <header>
                                <i className="fa-brands fa-openai fa-2xl"></i>
                                <h3 className='text-2xl'>Machine Learning
                                </h3>
                            </header>
                            <p>It is a long established fact that a reader will be distracted by the readable content.

                            </p>
                        </article>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeFeatures