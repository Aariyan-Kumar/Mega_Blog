import React, { useEffect } from 'react'
import bgImage from '../assets/pexels-plann-2999237-4549414.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';



function HomeSection() {

    const [user, setUser] = React.useState({});
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData) {
            setUser(userData);
            console.log(userData.name)
        }
    }, [userData])

    // console.log(user);


    return (
        <>
            <section className='w-full h-screen '>
                <div className=' h-screen bg-cover bg-center' style={{ backgroundImage: `linear-gradient(115deg, rgba(0, 10, 10, 0.658), rgba(10, 82, 127, 0.616)),url(${bgImage})` }}>
                    <div className='w-full text-center text-white font-medium tracking-wider leading-normal'>
                        <div className='pt-56'>
                            {user && (<h1 className='text-8xl text-center'>{user.name}</h1>)}
                        </div>
                        <div>
                            <h2 className='text-4xl text-center'>Publish your passions, your way</h2>
                            <p className='text-xl text-center'>Create a unique and beautiful blog easily.</p>
                            <br />
                            <Link to={user ? `/add-post` : `/login`}>
                                <button className="rounded bg-orange-600 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white hover:text-orange-600 shadow-orange-400 transition duration-150 ease-in-out hover:bg-orange-200 hover:font-nedium hover:shadow-orange-400 focus:outline-none focus:ring-0 motion-reduce:transition-none ">
                                    Start Blogging
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection
