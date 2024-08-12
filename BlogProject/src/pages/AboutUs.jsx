import React from 'react';
import bgImage from '../assets/pexels-plann-2999237-4549414.jpg';
import devProfile from '../assets/IMG_20220112_104907.jpg'

function AboutUs() {
    return (
        <>
            <section className='w-full h-auto bg-slate-300 py-12'>
                <div className='w-11/12 mx-auto'>
                    <h1 className='mb-8 text-4xl text-center leading-10'>Welcome to <span className='text-orange-500'>M</span>EGA <span className='text-orange-500'>B</span>LOGS <span className='font-medium'>Your Ultimate Blogging Community</span></h1>
                    <div className='w-full grid grid-cols-2 place-items-center gap-5 py-5 px-6'>
                        <p className='text-xl bg-white rounded-xl text-justify tracking-wide shadow-xl p-5'>
                            <span className='text-orange-500 text-3xl '>M</span>ega Blogs is more than just a platform; it’s a vibrant community where thoughts, stories, and ideas converge to create a rich tapestry of voices from all over the world. Whether you’re a seasoned writer, a passionate reader, or someone just starting to explore the world of blogging, Mega Blogs is your go-to destination for discovering diverse perspectives and sharing your unique voice.
                            <br />
                            <br />
                            Inspired by the evolution of social platforms, Mega Blogs combines the best aspects of social interaction and content creation, similar to Twitter (now X), but with a focus on fostering deep, meaningful conversations. Our platform is designed to encourage respectful dialogue, creative expression, and the exchange of ideas in a supportive environment.
                        </p>
                        <div className='w-full'>
                            <div className='w-full'>
                                <img className='w-full shadow-lg drop-shadow-2xl shadow-black/75 rounded-xl bg-cover bg-center' src={bgImage} alt="blog Image" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='w-full h-auto bg-white text-slate-800 py-12'>
                <div className='w-11/12 mx-auto'>
                    <h1 className='mb-8 text-4xl text-center leading-10'>About the Developer</h1>
                    <div className='grid grid-cols-2'>
                        <div className='mx-auto w-96 min-h-96 p-4 rounded-lg shadow-xl bg-slate-300'>
                            <div className='w-full'>
                                <img className='rounded-full w-full' src={devProfile} alt="devloper Profile pic" />
                            </div>
                            <h3 className='text-3xl font-medium text-center py-5'>Aariyan Kumar</h3>
                        </div>
                        <p className='text-xl text-justify tracking-wide px-5 bg-slate-300 rounded-xl pt-10 shadow-xl'>
                            <span className='font-bold'>Name:</span> Aariyan Kumar
                            <br />
                            <span className='font-bold'>Domain:</span> Full Stack Developer
                            <br />
                            <span className='font-bold'>Qualification:</span> 4th Yr B.tech Student
                            <br />
                            <span className='font-bold'>Collage:</span> Silicon University
                            <br />
                            <br />
                            Mega Blogs is brought to you by a passionate developer dedicated to creating a platform that empowers individuals to share their thoughts freely. With a background in web development and a vision for fostering online communities, our developer is committed to providing you with a seamless and enriching experience. Every feature, from the intuitive design to the robust functionality, is crafted with you in mind.
                        </p>
                    </div>
                </div>
            </section>
            <section className='w-full h-auto bg-slate-300 py-12'>
                <div>
                    <h1 className='mb-8 text-4xl text-center leading-10'>Community Stats</h1>
                    <div className='bg-white p-5 rounded-lg shadow-xl w-4/5 mx-auto'>
                        <div className='grid grid-cols-3 text-xl py-8'>
                            <div className='mx-auto'><span className='font-bold'>Post Published: </span>1.23K+</div>
                            <div className='mx-auto'><span className='font-bold'>Current Active Users: </span>500+</div>
                            <div className='mx-auto'><span className='font-bold'>Total Visitors: </span>12.3K+</div>
                        </div>
                        <p className='w-4/5 text-lg mx-auto py-5'>
                            At Mega Blogs, the numbers speak for themselves. Our community is thriving, with thousands of posts shared and a growing number of active users. Join the conversation and make your voice heard!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
