import React from 'react'
import image from '../../assets/image.png';
import Education from '../../components/Education';
import About from '../../components/About';
import Experiences from '../../components/Experiences';
import Bullet from '../../components/Bullet';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

export default function Homepage() {
  return (
    <div className='h-screen w-screen px-10'>
        <div className='flex'>
            {/* Profile Picture and Education */}
            <div className='flex flex-col items-center w-full h-full max-h-96 max-w-2/4'>
                <div className='w-80'>
                    <div className='py-32'>
                        <div className='mb-6'>
                            <img src={image} className='rounded-md '/>
                        </div>
                        <div>
                            <Education 
                                school={'Mapua University'}
                                year={'2021-2024'}
                                degree={'Bachelor of Science in Information Technology'}
                                about={'Gained knowledge and hands-on in Web Development, Quality Assurance, and Vulnerability Assessment.'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* About, Projects, and Experiences */}
            <div className='w-full h-full max-w-2/4'>
                <div className=' w-96 py-32'>
                    <div className='mb-6'>
                        <About 
                            name={'Benedict R. Cagampan'}
                            description={'Hi! My Name is Benedict. I am fresh graduate who is passionate in creating a meaningful Web Development projects. I stay update with the latest technology.'}
                        />
                    </div>
                    <div className='mb-6'>
                        <Experiences 
                            company={'Bridge360 IT Solution'}
                            year={'March 2024 - July 2024'}
                        />
                        <Bullet 
                            description={'Led a team of 4 for Mobile and Web Application project using MERN Stack'}
                        />
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-xl font-bold'>Projects</h1>
                        <div className='mb-6'>
                            <Projects 
                                name={'Taguig Bus Modern Jeep E-Ticketing System'}
                                description={'Led a team of 5, An Online ticketing system allows user to book their ride from point A to point B.'}
                                stacks={'Javascript DOM, MySQL, Node JS'}
                            />
                        </div> 
                        <div className='mb-6'>
                            <Projects 
                                name={'Kasha: Virtual Fitting Room Web Application'}
                                description={'Led a team of 3, a capstone project. It is a Virtual Fitting Room Application e-commerce that allows you to personalized 3D human body model and try different clothes.'}
                                stacks={'ThreeJS, React, PHP Laravel'}
                            />
                        </div> 

                        <div className='mb-6'>
                            <Projects 
                                name={'CoPal Web Application'}
                                description={'A ride sharing / carpool app that allows you to book driver and choose driver.'}
                                stacks={'MongoDB, Express Js, React Js, Node Js'}
                            />
                        </div> 

                        <div className='mb-6'>
                            <Projects 
                                name={'UV Express Landing Page'}
                                description={'A Public Utility Vehicle in the Philippines that caters commuters ease of ride in a different routes.'}
                                stacks={'Webflow'}
                            />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className=' w-full mx-auto border-y-2'>
            <Footer/>
        </div>
    </div>
  )
}
