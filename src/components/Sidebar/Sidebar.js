import React from 'react';
import '../Sidebar/index.css'

function Sidebar(props) {
    const page = props.page
    return (
        <>

        {/* LEFT SIDE */}
        <div className='left_side p-6 h-2/5 md:h-full w-full md:w-27 md:rounded-md '>

{/* Steps Container */}
<div className='w-full flex  items-center justify-center flex-row md:flex-col md:space-y-5 h-1/2'>
    {/* Step 1 */}
    <div className='flex h-12 px-2 md:px-0 md:w-full justify-center md:justify-start'>
        {/* For circle */}
        <div className='w-12 p-1.5 h-full '>
            <div style={{backgroundColor: page == 1 ? "hsl(229, 24%, 87%)" : "", color: page == 1 ? "hsl(213, 96%, 18%)" : "hsl(229, 24%, 87%)"}} className='border-2 w-full h-full rounded-full grid place-items-center'>1</div>
        </div>
        {/* For Words */}
        <div className='hidden md:flex pt-1 flex-col text-left ps-1'>
            <h2 className='text-sm text-Coolgray font-medium'>STEP 1</h2>
            <p className='text-sm text-Lightgray font-bold'>YOUR INFO</p>
        </div>
    </div>
    {/* Step 2 */}
    <div className='flex h-12 px-2 md:px-0 md:w-full justify-center md:justify-start'>
        {/* For circle */}
        <div className='w-12 p-1.5 h-full '>
            <div style={{backgroundColor: page == 2 ? "hsl(229, 24%, 87%)" : "", color: page == 2 ? "hsl(213, 96%, 18%)" : "hsl(229, 24%, 87%)"}} className=' w-full h-full rounded-full border-2  text-Lightgray grid place-items-center'>2</div>
        </div>
        {/* For Words */}
        <div className='hidden md:flex pt-1 flex-col text-left ps-1'>
            <h2 className='text-sm text-Coolgray font-medium'>STEP 2</h2>
            <p className='text-sm text-Lightgray font-bold'>SELECT PLAN</p>
        </div>
    </div>
    {/* Step 3 */}
    <div className='flex h-12 px-2 md:px-0 md:w-full justify-center md:justify-start'>
        {/* For circle */}
        <div className='w-12 p-1.5 h-full '>
            <div style={{backgroundColor: page == 3 ? "hsl(229, 24%, 87%)" : "", color: page == 3 ? "hsl(213, 96%, 18%)" : "hsl(229, 24%, 87%)"}} className=' w-full h-full rounded-full border-2 border-Lightgray text-Lightgray grid place-items-center'>3</div>
        </div>
        {/* For Words */}
        <div className='hidden md:flex pt-1 flex-col text-left ps-1'>
            <h2 className='text-sm text-Coolgray font-medium'>STEP 3</h2>
            <p className='text-sm text-Lightgray font-bold'>ADD-ONS</p>
        </div>
    </div>
    {/* Step 4 */}
    <div className='flex h-12 px-2 md:px-0 md:w-full justify-center md:justify-start'>
        {/* For circle */}
        <div className='w-12 p-1.5 h-full '>
            <div style={{backgroundColor: page == 4 ? "hsl(229, 24%, 87%)" : "", color: page == 4 ? "hsl(213, 96%, 18%)" : "hsl(229, 24%, 87%)"}} className=' w-full h-full rounded-full border-2 border-Lightgray text-Lightgray grid place-items-center'>4</div>
        </div>
        {/* For Words */}
        <div className='hidden md:flex pt-1 flex-col text-left ps-1'>
            <h2 className='text-sm text-Coolgray font-medium'>STEP 4</h2>
            <p className='text-sm text-Lightgray font-bold'>SUMMARY</p>
        </div>
    </div>
</div>

</div></>
    );
}

export default Sidebar;