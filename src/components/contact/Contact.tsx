import Footer from '../Footer'

const Contact = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto px-4'>
                <header className='text-center'>
                    <span className='text-[#E51938]'>CONTACT US
                    </span>
                    <h2 className='text-3xl font-black'>We'd Love To Hear From You! <br />
                        Get In Touch</h2>
                </header>

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-2'>
                            <div className=' w-16 h-16 bg-[#E51938] rounded-full flex items-center justify-center'>
                                <i className="fa-solid fa-location-dot fa-2xl"></i>
                            </div>
                            <div>
                                <h3 className='font-bold text-2xl'>Office Address:
                                </h3>
                                <p>2750 Quadra Street Victoria, Grand City, Canada.</p>
                            </div>
                        </li>
                        <li className='flex gap-2'>
                            <div className=' w-16 h-16 bg-[#E51938] rounded-full flex items-center justify-center'>
                                <i className="fa-solid fa-mobile-retro fa-2xl"></i>
                            </div>
                            <div>
                                <h3 className='font-bold text-2xl'>Phone:</h3>
                                <p>+44 587 154756

                                </p>
                                <p>+55 587 154756</p>
                            </div>
                        </li>
                        <li className='flex gap-2'>
                            <div className=' w-16 h-16 bg-[#E51938] rounded-full flex items-center justify-center'>
                                <i className="fa-solid fa-envelope fa-2xl"></i>
                            </div>
                            <div>
                                <h3 className='font-bold text-2xl'>Email Address:
                                </h3>
                                <p>
                                    hello@yango.com
                                </p>
                                <p>info@yango.com</p>
                            </div>
                        </li>
                    </ul>

                    <form className='col-span-2'>
                        <div className='flex gap-3'>
                            <input className='w-3/6 p-4 border mb-4' type="text" placeholder='name' name='name' />
                            <input className='w-3/6 p-4 border mb-4' type="email" name="email" id="email" placeholder='email' />
                        </div>

                        <div className='flex gap-3'>
                            <input className='w-3/6 p-4 border mb-4' type="number" name="phoneNumber" id="phone" placeholder='phone number' />
                            <input className='w-3/6 p-4 border mb-4' type="text" name='subject' placeholder='subject' />
                        </div>

                        <textarea className='w-full border' name="text" id="text" placeholder='message'></textarea>

                        <div>
                            <button className='w-full p-4 bg-[#E51938] text-white' type='submit'>Send Message</button>

                        </div>
                    </form>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact