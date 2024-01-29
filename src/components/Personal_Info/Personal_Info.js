import React, { useEffect } from 'react';
import '../Personal_Info/index.css'
import Sidebar from '../Sidebar/Sidebar';
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addSubscription } from '../../redux/actions/actions';
import { useState } from 'react';
import Plans from '../Plans/Plans';
import { useNavigate } from 'react-router-dom';


function Personal_Info(props) {
    const dispatch = useDispatch()
    const subscriptions = useSelector((state) => state.allSubscription.subscriptions)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

   if(subscriptions == null || undefined){
    console.log("Hello")
   }
    

    const submitPersonalInfo = () => {
        const newSubscription = [...subscriptions]
            const insert = {
                name: name,
                email: email,
                phone: phone
            }

            if(name == '' & email == '' & phone == ''){
            document.getElementById('name').classList.add('information')
            document.getElementById('name-req').classList.add('required')
            document.getElementById('email').classList.add('information')
            document.getElementById('email-req').classList.add('required')
            document.getElementById('phone').classList.add('information')
            document.getElementById('phone-req').classList.add('required')

            }else if(email == ''){

                document.getElementById('email').classList.add('information')
            document.getElementById('email-req').classList.add('required')
    
            }else if(phone == ''){

                document.getElementById('phone').classList.add('information')
                document.getElementById('phone-req').classList.add('required')
    
            }else if(name == ''){
                document.getElementById('name').classList.add('information')
                document.getElementById('name-req').classList.add('required')
            
            }
            else if(email != '' & name != '' & phone != ''){
            newSubscription.push(insert)

            dispatch(addSubscription(newSubscription))
            navigate('/plans')
        }

    }

    useEffect(()=> {
        if(document.getElementById('name').value != ''){
            document.getElementById('name').classList.remove("information")
            document.getElementById('name-req').classList.remove("required")
        }
        if(document.getElementById('email').value != ''){
            document.getElementById('email').classList.remove("information")
            document.getElementById('email-req').classList.remove("required")
        }
        if(document.getElementById('phone').value != ''){
            document.getElementById('phone').classList.remove("information")
            document.getElementById('phone-req').classList.remove("required")
        }
    })
    
    
    return (
        <div className='w-100 bg-gray-200 h-screen grid place-items-center '>
            
            <div className='main_container md:p-4 md:space-x-3 flex flex-col justify-evenly items-center w-full h-full md:flex-row lg:w-10/12 xl:w-4/6 md:h-4/5 bg-white rounded-md '>
               {/* LEFT SIDE */}
                <Sidebar page={1}/>

                {/* RIGHT SIDE */}
                <div className='bg-Lightgray md:bg-white w-full flex items-center justify-center md:w-9/12 h-full md:rounded-md p-3 relative'>
                    {/* Right Side Main Section */}
                    <section className='w-11/12 flex flex-col justify-between rounded-md mx-auto px-6 md:px-24 pt-7 md:w-full absolute md:relative md:h-fit -translate-y-48 md:translate-y-0  bg-white pb-4'>
                        {/* Header */}
                        <div>
                        <div className='w-full space-y-3 text-left flex flex-col'>
                            <h1 className='text-4xl font-bold text-MarineBlue'>Personal info</h1>
                            <p className='text-Coolgray'>Please provide your name, email address, and phone number.</p>
                        </div>

                        {/* Input Fields */}
                        <div className='w-full space-y-5 flex flex-col text-left mt-10'>
                            
                            {/* NAME */}
                        <div className="flex flex-col space-y-1">
                        <label className='text-MarineBlue font-semibold flex items-center' htmlFor='name'>Name <p id='name-req' className='hidden text-xs ml-5'>*Required</p></label>
                        <input value={name} onChange={(e)=>{setName(e.target.value)}} id='name' className=' border-2 p-3 rounded-md focus:outline-none' type="text" placeholder='e.g. Stephen King'></input>
                        </div>
                            {/* EMAIL ADDRESS */}
                        <div className="flex flex-col space-y-1">
                        <label className='text-MarineBlue font-semibold flex items-center' htmlFor='email'>Email Address <p id='email-req' className='hidden text-xs ml-5'>*Required</p></label>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id='email' className=' border-2 p-3 rounded-md focus:outline-none' type="text" placeholder='e.g. StephenKing@lorem.com'></input>
                        </div>
                            {/* PHONE NUMBER */}
                        <div className="flex flex-col space-y-1">
                        <label className='text-MarineBlue font-semibold flex items-center' htmlFor='phone'>Phone Number <p id='phone-req' className='hidden text-xs ml-5'>*Required</p></label>
                        <input value={phone} onChange={(e)=>{setPhone(parseInt(e.target.value))}} id='phone' className=' border-2 p-3 rounded-md focus:outline-none' type="number" placeholder='e.g. +1 234 567 890'></input>
                        </div>
                        
                        </div>
                        </div>
                        {/* END OF INPUT FIELD */}
                        <button onClick={()=>{submitPersonalInfo()}} className='hidden md:block w-fit px-6 py-3 rounded-md mt-16 self-end  bg-MarineBlue text-white hover:bg-PurplishBlue'>Next Step</button>
                        
                    </section>

                    <div className='md:hidden absolute py-4 px-4 flex items-end justify-end  w-full  bg-white bottom-0'>
                    <button onClick={()=>{submitPersonalInfo()}} className=' md:hidden w-fit px-6 py-3 rounded-md self-end  bg-MarineBlue text-white'><Link to="/plans">Next Step</Link></button>
                    </div>
                </div>
        
            </div>

        </div>
    );
}

export default Personal_Info;