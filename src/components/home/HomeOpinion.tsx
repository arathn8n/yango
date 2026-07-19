
const HomeOpinion = () => {
    return (
        <div style={{ backgroundImage: "url('/bg2.jpg')" }} className='mt-10 pt-10 pb-10'>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 max-w-7xl mx-auto px-4'>
                <img src="/feedback.png" alt="feedback" />
                <section>
                    <p className='text-3xl md:text-2xl md:text-center'> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <figure className='flex gap-5 mt-10 md:text-xl md:justify-center'>
                        <img className='rounded-full w-14' src="/user1.jpg" alt="user" />
                        <figcaption>
                            <header>
                                <h4 className='text-[#E51938]'>JASON STATHAM</h4>
                            </header>
                            <p>Web Developer
                            </p>
                        </figcaption>
                    </figure>

                </section>
            </div>
        </div>
    )
}

export default HomeOpinion