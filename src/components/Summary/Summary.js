import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import { addSubscription } from '../../redux/actions/actions';

function Summary(props) {
    const dispatch = useDispatch()
    const subscriptions = useSelector((state) => state.allSubscription.subscriptions)
    const [totalPer, setTotalPer] = useState('')
    const [per, setPer] = useState('')
    const [total, setTotal] = useState(0)
    let sum = 0

    useEffect(()=> {
        if(subscriptions[0].payment == 'Yearly'){
            setTotalPer('year')
            setPer('yr')
        }else{
            setTotalPer("month")
            setPer('mo')
        }
    }, [])

    useEffect(()=> {
        setTotal(parseInt(subscriptions[0].price) + sum)
    },[])

    return (
        <div>
            <div className='w-full bg-gray-200 h-screen grid place-items-center '>
            
            <div className='main_container md:p-4 md:space-x-3 flex flex-col justify-evenly items-center w-full h-full md:flex-row md:w-11/12 lg:w-11/12 xl:w-4/6 md:h-4/5 bg-white rounded-md '>
               {/* LEFT SIDE */}
                <Sidebar page={4}/>

                {/* RIGHT SIDE */}
                <div className='bg-Lightgray md:bg-white w-full flex items-center justify-center md:w-9/12 h-full md:rounded-md p-3 relative'>
                    {/* Right Side Main Section */}
                    <section className='w-11/12 flex flex-col justify-between rounded-md mx-auto px-6 lg:px-24 pt-7 md:w-full absolute md:relative md:h-full -translate-y-48 md:translate-y-0  bg-white pb-4'>
                        {/* Header */}
                        <div>
                        <div className='w-full space-y-3 text-left flex flex-col'>
                            <h1 className='text-3xl md:text-4xl font-bold text-MarineBlue'>Finishing up</h1>
                            <p className='text-Coolgray'>Double-check everything looks OK before confirming.</p>
                        </div>

                        {/* Summary Container */}
                        <div className='w-full  flex flex-col mt-10'>
                            {/* Box 1 */}
                            <div className='flex justify-between border-2 border-b-0 items-center p-3.5'>
                                <div className='flex flex-col'>
                                    <h1 className='text-MarineBlue font-semibold'>{subscriptions[0].plan} ({subscriptions[0].payment})</h1>
                                    <a className='text-md text-decoration-line: underline text-blue-600' href='plans'>Change</a>  
                                </div>
                                <h2 className='font-semibold text-MarineBlue'>${subscriptions[0].price}</h2>
                            </div>
                            {/* Box 2 */}
                            <div className='flex flex-col space-y-3 border-2 border-b-0 justify-between p-3.5'>
                                {
                                    subscriptions[0].addons.map((addons, index) => {
                                        
                                        return (
                                            <div key={index} className='flex justify-between'>
                                            <h1 className='text-Coolgray text-sm'>{addons.title}</h1> 
                                            <h2 className='font-medium text-sm text-MarineBlue'>+${addons.price}/{per}</h2>
                                            <p className='hidden'>{sum += addons.price}</p>
                                        </div>
                                        )
                                        
                                    })
                                }

                                
                            </div>
                            {/* Box 2 */}
                            <div className='flex flex-col space-y-3 border-2 justify-between p-3.5'>
                                <div className='flex justify-between'>
                                    <h1 className='text-Coolgray text-sm'>Total (per {totalPer})</h1> 
                                    <h2 className='font-bold text-md text-PurplishBlue'>+${total}/{per}</h2>
                                </div>
                                
                            </div>
                        </div>
                        
                        </div>
                        <div className='w-full flex items-end  justify-between'>
                        <button className='hidden md:block w-fit  rounded-md mt-16 self-end justify-end  items-start  text-Coolgray'><Link to="/addons" >Go Back</Link></button>
                        <button onClick={()=>{localStorage.clear()}}  className='hidden md:block w-fit px-6 py-3 rounded-md mt-16 self-end  bg-MarineBlue text-white'><Link to="/ending" >Confirm</Link></button>
                        </div>
                        
                        
                    </section>

                    <div className='md:hidden absolute py-4 px-4 flex items-end justify-between  w-full  bg-white bottom-0'>
                    <button className=' md:hidden w-fit px-6 py-3 rounded-md self-end  text-Coolgray'><Link to="/addons">Go Back</Link></button>
                    <button onClick={()=>{localStorage.clear()}} className=' md:hidden w-fit px-6 py-3 rounded-md self-end  bg-MarineBlue text-white'><Link to="/ending" >Confirm</Link></button>
                    </div>
                </div>
        
            </div>

        </div>
        </div>
    );
}

export default Summary;