import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#F9F5F2]'>
            <div className='px-4 max-w-7xl mx-auto grid grid-cols-1 pt-10 pb-10 md:place-items-center md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <img className='block mb-3.5' src="/logo.png" alt="logo" />
                    <p className='mb-3.5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.

                    </p>
                    <form className='mb-3.5'>
                        <input className='p-3 bg-white' type="email" placeholder='enter your email' name="email" id="email" />
                        <button className='p-3 bg-[#E51938] text-white hover:bg-black hover:cursor-pointer transition-all duration-300' type='submit'>Subscribe</button>
                    </form>

                    <ul className='flex gap-2'>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <article>
                    <header>
                        <h3 className='font-black'>
                            Resources
                        </h3>
                    </header>
                    <ul>
                        <li>
                            <a href="#">How It Works</a>
                        </li>
                        <li>
                            <a href="#">Web Development</a>
                        </li>
                        <li>
                            <a href="#">Work Portfolio</a>
                        </li>
                        <li>
                            <a href="#">SEO & Backlinks</a>
                        </li>
                        <li>
                            <a href="#">SMM Production</a>
                        </li>
                        <li>
                            <a href="#">Collaboration</a>
                        </li>
                    </ul>
                </article>

                <article>
                    <header>
                        <h3 className='font-black'>About</h3>
                    </header>

                    <ul>
                        <li>
                            <a href="#">Our Mission</a>
                        </li>
                        <li>
                            <a href="#">Our Story</a>
                        </li>
                        <li>
                            <a href="#">Team Members</a>
                        </li>
                        <li>
                            <a href="#">Plan & Pricing</a>
                        </li>
                        <li>
                            <a href="#">Career</a>
                        </li>
                        <li>
                            <a href="#">Live Chat</a>
                        </li>
                    </ul>
                </article>

                <article>
                    <header>
                        <h3 className='font-black'>Contact</h3>
                    </header>

                    <address>
                        <p><span>Address:</span> 2750 Quadra Street Victoria, Canada.</p>
                        <p><span>Email:</span> hello@yango.com
                        </p>
                        <p><span>Phone:</span> +44 587 154756</p>
                        <p><span>Fax:</span> +44 785 4578964</p>
                    </address>
                </article>
            </div>
        </div>
    )
}

export default Footer