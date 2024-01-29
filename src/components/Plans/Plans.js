import React, { useEffect } from 'react';
import '../Plans/index.css'
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import arcade from '../Plans/icon-arcade.svg'
import advance from '../Plans/icon-advanced.svg'
import pro from '../Plans/icon-pro.svg'
import App from '../../App';
import { addSubscription } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';

function Plans(props) {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const subscriptions = useSelector((state) => state.allSubscription.subscriptions)
    const [isChecked, setIsChecked] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('')
    const [selectedPrice, setSelectedPrice] = useState('')
    const [selectedPayment, setSelectedPayment] = useState(subscriptions[0].payment)
    

    const [plans, setPLans] = useState([
        {
            id:1,
            image: arcade,
            title : "Arcade",
            Mprice: 9,
            Yprice: 90,
            isActive: false
    
            },
            {
            id:2,
            image: advance,
            title : "Advanced",
            Mprice: 12,
            Yprice: 120,
            isActive: false
            },
            {
            id:3,
            image: pro,
            title : "Pro",
            Mprice: 15,
            Yprice: 150,
            isActive: false 
            }
    ])

    const setPlan = (id) => {
        
            const newPlan = [...plans]
            const checkActive = newPlan.findIndex(plan => plan.isActive === true)
            const selectedPLanIndex = newPlan.findIndex(plan => plan.id === id)
            // Updates the array
            if (selectedPLanIndex !== -1) {
                const selectPlan = {
                    ...newPlan[selectedPLanIndex], isActive: true
                }
                newPlan[selectedPLanIndex] = selectPlan
                setPLans(newPlan)
            }

            // CHECK if there an active state
            if ( checkActive != -1){
                
                const disableActive = {
                    ...newPlan[checkActive], isActive: false
                    
                }

                newPlan[checkActive] = disableActive
                setPLans(newPlan)
            }  
    }

    const handlePayment = () => {
        setIsChecked(!isChecked)
        const newPlan = [...plans]
        const checkActive = newPlan.findIndex(plan => plan.isActive === true)
        if ( checkActive != -1){
                
            // const disableActive = {
            //     ...newPlan[checkActive], isActive: false
                
            // }

            // newPlan[checkActive] = disableActive
            // setPLans(newPlan)
        }  
        if(!isChecked){
            setSelectedPayment("Yearly")
        }else{
            setSelectedPayment("Monthly")
        }
        setSelectedPrice('')
    }



   const submitPLan = () => {
    if(selectedPlan == '' || selectedPayment == ''){
        alert("Choose a plan first")
    }else{
    const newSubscription = [...subscriptions]
    const update = {
        plan: selectedPlan,
        price: selectedPrice,
        payment: selectedPayment
    }

    const newUpdate = Object.assign(newSubscription[0], update)
    
    newSubscription.splice(0,1, newUpdate)
    dispatch(addSubscription(newSubscription))
    navigate('/addons')

   
    }
    
    
   }
   


   useEffect(()=> {
    
    const filtered = plans.findIndex(plans => plans.isActive == true)
    if(filtered !== -1){
       selectedPayment == 'Yearly' ? setSelectedPrice(plans[filtered].Yprice) : setSelectedPrice(plans[filtered].Mprice)

    }else{

        setSelectedPlan('')
        setSelectedPrice('')
        
    }
    


   })
   useEffect(()=> {
    const newPlan = [...plans]
    const selectedPLan = newPlan.findIndex(plan => plan.title == subscriptions[0].plan)
    if (selectedPLan !== -1) {
        const selectPlan = {
            ...newPlan[selectedPLan], isActive: true
        }
        newPlan[selectedPLan] = selectPlan
        setPLans(newPlan)
        
        setSelectedPrice(selectedPayment == 'Yearly' ? newPlan[selectedPLan].Yprice : newPlan[selectedPLan].Mprice)
        setSelectedPlan(newPlan[selectedPLan].title)
    }
   },[])

//    console.log(subscriptions[0].payment)
   useEffect(()=> {
    if(subscriptions[0].payment == 'Yearly'){
       setIsChecked(true)
    }else{
        setIsChecked(false)
    }
   },[])

   
    
    return (
        
        <div className='w-full bg-gray-200 h-screen grid place-items-center '>
            
            <div className='main_container md:p-4 md:space-x-3 flex flex-col justify-evenly items-center w-full h-full md:flex-row md:w-11/12 lg:w-11/12 xl:w-4/6 md:h-4/5 bg-white rounded-md '>
               {/* LEFT SIDE */}
                <Sidebar page={2}/>

                {/* RIGHT SIDE */}
                <div className='bg-Lightgray md:bg-white w-full flex items-center justify-center md:w-9/12 h-full md:rounded-md p-3 relative'>
                    {/* Right Side Main Section */}
                    <section className='w-11/12 flex flex-col justify-between rounded-md mx-auto px-6 lg:px-24 pt-7 mt-20 md:mt-0 md:w-full absolute md:relative md:h-full -translate-y-48 md:translate-y-0  bg-white'>
                        {/* Header */}
                        <div>
                        <div className='w-full space-y-3 text-left flex flex-col'>
                            <h1 className='text-3xl md:text-4xl font-bold text-MarineBlue'>Select your plan</h1>
                            <p className='text-Coolgray'>You have the option of monthly or yearly billing.</p>
                        </div>

                        {/* Three Boxes */}
                        <div className='w-full flex flex-col md:flex-row space-y-3 md:space-y-0  md:space-x-12 items-center mt-10'>

                        {
                            plans.map((plan, index) => {
                                return (
                                    <div id='box' key={index} style={{"borderColor": plan.isActive ? "hsl(228, 100%, 84%)" : ""}} className='w-full md:w-27 border-2 rounded-md'>
                                    {/* Box 1 */}
                            
                            <div onClick={()=>{setPlan(plan.id); setSelectedPlan(plan.title)}}  className='flex items-center  md:flex-col md:items-start md:space-y-10  py-4 ps-3.5  w-full cursor-pointer'>
                                <img src={plan.image}/>

                                {/* Bottom Title */}
                                <div className='flex flex-col ms-3 md:ms-0 items-start space-y-1'>
                                    <h3 className='text-sm font-bold text-MarineBlue'>{plan.title}</h3>
                                    <p className='text-xs text-Coolgray'>${selectedPayment == 'Monthly' ? plan.Mprice + '/mo' : selectedPayment == undefined ? plan.Mprice + '/mo' : plan.Yprice + '/yr'}</p>
                                </div>
                            </div>
                                    </div>
                                )
                            })
                        }
                            
                            
                        </div>
                        
                        {/* Toggle Switch */}
                        <div className='w-full items-center mb-7 flex py-2.5 bg-Magnolia mt-8 justify-center'>
                        <h2 className='font-bold text-MarineBlue'>Monthly</h2>
                        <label className="switch mx-5">
                        <input id='chk' type="checkbox" checked={isChecked} onChange={handlePayment}/>
                        <span className="slider round"></span>
                        </label>
                        <h2 className='text-MarineBlue font-bold'>Yearly</h2> 
                        </div>
                        
                        </div>
                        <div className='w-full flex items-end  justify-between'>
                        <button className='hidden md:block w-fit  rounded-md mt-16 self-end justify-end  items-start  text-Coolgray'><Link to="/personalInfo" >Go Back</Link></button>
                        <button onClick={()=>{submitPLan()}} className='hidden md:block w-fit px-6 py-3 rounded-md mt-16 self-end  bg-MarineBlue text-white'>Next Step</button>
                        </div>
                        
                        
                    </section>

                    <div className='md:hidden absolute py-4 px-4 flex items-end justify-between  w-full  bg-white bottom-0'>
                    <button  className=' md:hidden w-fit px-6 py-3 rounded-md self-end  text-Coolgray'><Link to="/personalInfo">Go Back</Link></button>
                    <button onClick={()=>{submitPLan()}} className=' md:hidden w-fit px-6 py-3 rounded-md self-end  bg-MarineBlue text-white'><Link to="/addons" >Next Step</Link></button>
                    </div>
                </div>
        
            </div>

        </div>
    );
}

export default Plans;