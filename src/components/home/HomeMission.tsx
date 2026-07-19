
const HomeMission = () => {
    return (
        <div className='pt-10 max-w-7xl mx-auto grid grid-cols-1 gap-5 px-4 md:grid-cols-2'>
            <section>
                <header>
                    <span className='text-[#E51938] block mb-3.5'>OUR MISSION</span>
                    <h2 className='text-3xl font-black mb-3.5'>Preparing for Your Business <br /> Success in IT Field
                    </h2>
                </header>
                <p className='mb-3.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                </p>
                <img className='max-w-2xs hidden lg:block' src="/mission1.png" alt="" />
            </section>
            <div>

                <img className='block place-self-end-safe h-auto' src="/mission2.jpg" alt="mission" />
            </div>
        </div>
    )
}

export default HomeMission