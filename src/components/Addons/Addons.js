import React, { useEffect } from 'react';
import "../Addons/index.css"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link, useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import { addSubscription } from '../../redux/actions/actions';

function Addons(props) {
    const navigate = useNavigate()
    
    const [plans, setPLans] = useState('')
    const [addons, setAddons] = useState( [
        
        {   id: 1,
            name: 'chk1',
            title: "Online Service",
            description: "Access to multiplayer games",
            Mprice: 1,
            Yprice: 10,
            isChecked: false
        },
        {   
            id: 2,
            name: 'chk2',
            title: "Larger Storage",
            description: "Extra 1TB of cloud save",
            Mprice: 2,
            Yprice: 20,
            isChecked: false
        },
        {   
            id: 3,
            name: 'chk3',
            title: "Customizable profile",
            description: "Custom theme on your profile",
            Mprice: 2,
            Yprice: 20,
            isChecked: false
        }
    ])
    const dispatch = useDispatch()
    const subscriptions = useSelector((state) => state.allSubscription.subscriptions)
    const [addonTitle, setAddonTitle] = useState([])
    const [addonPrice, setAddonPrice] = useState([])


    const setAddon = () => {
        const price = [...document.querySelectorAll('input[type=checkbox]:checked')].map((e) => {
            return (
                {
                    title: String(e.title),
                    price: parseInt(e.value),
                    name: e.name,
                    isChecked: true
                }
        )
        });
        
        const newSubscription = [...subscriptions]
        const addons = {addons : [...price]}
        const newUpdate = Object.assign(newSubscription[0], addons)
        
        newSubscription.splice(0,1, newUpdate)
        dispatch(addSubscription(newSubscription))

    }
    
    const select = (event, index, name) => {
        const newAddons = [...addons]
        if (event.currentTarget.style.borderColor == "blue") {
            event.currentTarget.style.borderColor = "Lightgray";
          } else {
            event.currentTarget.style.borderColor = 'blue';
          }  


    }

    useEffect(()=> {
        if(subscriptions[0].addons == undefined){

        }else {
            const newSubscriptions = subscriptions[0].addons
            const newAddons = [...addons]
            
            newSubscriptions.map((subscription, index)=> {
                newAddons.map((addons, index) => {
                    if(subscription.title == addons.title){
                       document.getElementById(addons.id -1).style.borderColor = 'blue'
                       document.getElementById(addons.name).setAttribute("checked", "")
                        
                    }else {

                    }
                })
            })
        }
    },[])

    useEffect(()=> {
        if(subscriptions[0].payment == "Yearly"){
            setPLans("Yearly")
        }else{
            setPLans("Monthly")
        }
    }, [])

    


    return (
        <div>
            <div className='w-full bg-gray-200 h-screen grid place-items-center '>
            
            <div className='main_container md:p-4 md:space-x-3 flex flex-col justify-evenly items-center w-full h-full md:flex-row md:w-11/12 lg:w-11/12 xl:w-4/6 md:h-4/5 bg-white rounded-md '>
               {/* LEFT SIDE */}
                <Sidebar page={3}/>

                {/* RIGHT SIDE */}
                <div className='bg-Lightgray md:bg-white w-full flex items-center justify-center md:w-9/12 h-full md:rounded-md p-3 relative'>
                    {/* Right Side Main Section */}
                    <section className='w-11/12 flex flex-col justify-between rounded-md mx-auto px-6 lg:px-24 pt-7 md:w-full absolute md:relative md:h-full -translate-y-48 md:translate-y-0  bg-white pb-5'>
                        {/* Header */}
                        <div>
                        <div className='w-full space-y-3 text-left flex flex-col'>
                            <h1 className='text-3xl md:text-4xl font-bold text-MarineBlue'>Pick add-ons</h1>
                            <p className='text-Coolgray'>Add-ons help enhance your gaming experience.</p>
                        </div>

                        {/* ADDONS MENU */}
                        <div className='w-full space-y-3 flex flex-col'>

                            {
                                addons.map((addons, index)=> {

                                    
                                        return (
                                           
                                            <div id={index} name={addons.name} key={index} onClick={(e)=>{select(e, index, addons.name);document.getElementById(addons.name).toggleAttribute("checked"); addons.isChecked == true ? addons.isChecked = false : addons.isChecked = true}} className='addon flex mt-9 w-full justify-between items-center border-2 py-3.5 border-Lightgray rounded-md px-5'>
                                            <div className='flex space-x-5'>
                                                
                                                <input id={addons.name} type="checkbox" name={addons.name} value={plans == 'Yearly' ? addons.Yprice : addons.Mprice} title={addons.title} className='border-0 w-4' />
                                                {/* Description */}
                                                <div className='flex flex-col'>
                                                    <h2 className='text-sm font-bold text-MarineBlue'>{addons.title}</h2>
                                                    <p className='text-xs text-Coolgray'>{addons.description}</p>
                                                </div>   
                                            </div>
                                            
                                            {/* Price */}
                                            <h2 className='float-right relative text-PurplishBlue text-sm font-medium'>+${plans == 'Yearly' ? addons.Yprice + '/yr' : addons.Mprice + '/mo'}</h2>
                                        </div>
                                        )
                                    
                                    
                                })
                            }

                            {/* ADDON 1 */}
                           
                            
                            

                        </div>
                        
                        </div>
                        <div className='w-full flex items-end  justify-between'>
                        <button className='hidden md:block w-fit  rounded-md mt-16 self-end justify-end  items-start  text-Coolgray'><Link to="/plans" >Go Back</Link></button>
                        <button onClick={()=>{setAddon()}} className='hidden md:block w-fit px-6 py-3 rounded-md mt-16 self-end  bg-MarineBlue text-white'><Link to="/summary" >Next Step</Link></button>
                        </div>
                        
                        
                    </section>

                    <div className='md:hidden absolute py-4 px-4 flex items-end justify-between  w-full  bg-white bottom-0'>
                    <button className=' md:hidden w-fit px-6 py-3 rounded-md self-end  text-Coolgray'><Link to="/plans">Go Back</Link></button>
                    <button onClick={()=>{setAddon()}}  className=' md:hidden w-fit px-6 py-3 rounded-md self-end  bg-MarineBlue text-white'><Link to="/summary" >Next Step</Link></button>
                    </div>
                </div>
        
            </div>

        </div>
        </div>
    );
}

export default Addons;