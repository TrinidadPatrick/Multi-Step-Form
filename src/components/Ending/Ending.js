import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import icon from '../Ending/icon-thank-you.svg'
function Ending(props) {
    return (
        <div>
            <div className='w-full bg-gray-200 h-screen grid place-items-center '>
            
            <div className='main_container md:p-4 md:space-x-3 flex flex-col justify-evenly items-center w-full h-full md:flex-row md:w-11/12 lg:w-11/12 xl:w-4/6 md:h-4/5 bg-white rounded-md '>
               {/* LEFT SIDE */}
                <Sidebar page={4}/>

                {/* RIGHT SIDE */}
                <div className='bg-Lightgray md:bg-white w-full flex items-center justify-center md:w-9/12 h-full md:rounded-md p-3 relative'>
                    {/* Right Side Main Section */}
                    <section className='w-11/12 flex flex-col justify-center space-y-6 rounded-md mx-auto px-6 lg:px-24 pt-14 pb-14 md:w-full absolute md:relative md:h-full -translate-y-48 md:translate-y-0  bg-white '>
                    <div className='w-full flex items-center justify-center'>
                        <img src={icon} alt='' />
                    </div>
                    <h1 className='text-4xl font-bold text-center text-MarineBlue'>Thank you!</h1>
                    <p className='text-center text-Coolgray'>
                    Thanks for confirming your subscription! We hope you have fun 
                    using our platform. If you ever need support, please feel free 
                    to email us at support@loremgaming.com.
                    </p>
                        <div className='w-full bg-black h-fit flex items-end  justify-end'>
                        <button  className='hidden md:block w-fit px-6 py-3 rounded-md bottom-0 absolute self-end text-sm  bg-MarineBlue text-white'><Link to="/personalInfo" >Back to form</Link></button>
                        </div>
                        
                        
                    </section>

                    <div className='md:hidden absolute py-4 px-4 flex items-end justify-end  w-full  bg-white bottom-0'>
                    <button  className=' md:hidden w-fit px-6 py-3 rounded-md self-end text-sm bg-MarineBlue text-white'><Link to="/personalInfo" >Back to form</Link></button>
                    </div>
                </div>
        
            </div>

        </div>
        </div>
    );
}

export default Ending;