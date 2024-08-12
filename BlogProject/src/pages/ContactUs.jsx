import React from 'react';
import contact from '../assets/contact-us.svg';

function ContactUs() {
    return (
        <>
            <section>
                <h1 className="text-center text-4xl py-8 text-slate-900 font-medium">Contact Us</h1>
                <div className='ml-24 grid grid-cols-2 items-center '>
                    <div className="w-4/5 bg-white ml-auto rounded-l-lg h-full">
                        <form>
                            <div className="w-full pt-8" >
                                <div className="py-2">
                                    <input type="text" id="fname" className="w-4/5 px-5  mx-auto h-12 block m-0 bg-transparent border-2 border-slate-900  rounded-lg placeholder-slate-900 placeholder:font-medium" placeholder="Your Full Name..." />
                                </div>
                                <div className="py-2">
                                    <input type="email" id="email" className="w-4/5 px-5  mx-auto h-12 block m-0 bg-transparent border-2 border-slate-900  rounded-lg placeholder-slate-900 placeholder:font-medium" placeholder="Enter your email..." />
                                </div>
                                <div className="py-2">
                                    <input type="text" id="subject" className="w-4/5 px-5  mx-auto h-12 block m-0 bg-transparent border-2 border-slate-900  rounded-lg placeholder-slate-900 placeholder:font-medium" placeholder="Enter your subject for contacting..." />
                                </div>
                                <div className="py-2">
                                    <textarea placeholder='Write your problem....' className='w-4/5 px-5 py-2  mx-auto h-32 block m-0 bg-transparent border-2 border-slate-900  rounded-lg placeholder-slate-900 placeholder:font-medium' id=""></textarea>
                                </div>
                                <div className='flex justify-center py-4'>
                                    <button className='rounded bg-green-600 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white hover:text-green-600 shadow-green-400 transition duration-150 ease-in-out hover:bg-green-200 hover:font-nedium hover:shadow-green-400 focus:outline-none focus:ring-0 motion-reduce:transition-none'>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-[70%] bg-white py-2'>
                        <img className='rounded-r-lg mr-auto' src={contact} alt="contact us image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
