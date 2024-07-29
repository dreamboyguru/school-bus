import React, { useState } from 'react'
import { FaBus, FaWalking } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdGroupOff, MdPeople } from 'react-icons/md'
import Student from './Student'

const Dashboard = () => { 
    const [type, setType] = useState('');
    // const url = process.env.REACT_APP_API_URL;
    // useEffect(()=>{
    // const fetchData = async() => {
    //     try {
    //     const response = await axios.get(`${url}/api/admin/dashbord`);
    //     // console.log(response.data);
    //     setCount(response.data[0]);
    //     } catch (err) {
    //     console.log(err);
    //     }
    // }
    // fetchData()
    // }, [])
    const handleDetails = (detail) => {
        setType(detail);
    }
    return (
        <div className='text-2xl w-full mt-12'>
            <div class="flex flex-wrap justify-center">
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div className='relative'>
                        <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-purple-500 flex justify-center items-center size-20 text-5xl rounded-full p-1 border-2'>
                            <FaPeopleGroup className='text-white'/>
                        </div>
                    </div>
                    <div class="bg-purple-500 shadow rounded pt-5">
                        <div className='p-4 text-white'>
                            <div className='font-semibold text-lg'>Total Student</div>
                            <div className='font-bold text-2xl'>10</div>
                        </div>
                        <div onClick={()=>handleDetails('all')} className='font-semibold text-xs p-1 w-full bg-purple-600 text-gray-300 hover:text-gray-100 cursor-pointer'>More info...</div>
                    </div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div className='relative'>
                        <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-green-500 flex justify-center items-center size-20 text-5xl rounded-full p-1 border-2'>
                            <MdPeople className='text-white'/>
                        </div>
                    </div>
                    <div class="bg-green-500 shadow rounded pt-5">
                        <div className='p-4 text-white'>
                            <div className='font-semibold text-lg'>Present Student</div>
                            <div className='font-bold text-2xl'>10</div>
                        </div>
                        <div onClick={()=>handleDetails('all')} className='font-semibold text-xs p-1 w-full bg-green-600 text-gray-300 hover:text-gray-100 cursor-pointer'>More info...</div>
                    </div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div className='relative'>
                        <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-red-500 flex justify-center items-center size-20 text-5xl rounded-full p-1 border-2'>
                            <MdGroupOff className='text-white'/>
                        </div>
                    </div>
                    <div class="bg-red-500 shadow rounded pt-5">
                        <div className='p-4 text-white'>
                            <div className='font-semibold text-lg'>Absent Student</div>
                            <div className='font-bold text-2xl'>10</div>
                        </div>
                        <div onClick={()=>handleDetails('all')} className='font-semibold text-xs p-1 w-full bg-red-600 text-gray-300 hover:text-gray-100 cursor-pointer'>More info...</div>
                    </div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div className='relative'>
                        <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-yellow-500 flex justify-center items-center size-20 text-4xl rounded-full p-1 border-2'>
                            <FaBus className='text-white'/>
                        </div>
                    </div>
                    <div class="bg-yellow-500 shadow rounded pt-5">
                        <div className='p-4 text-white'>
                            <div className='font-semibold text-lg'>Come by Bus</div>
                            <div className='font-bold text-2xl'>10</div>
                        </div>
                        <div onClick={()=>handleDetails('all')} className='font-semibold text-xs p-1 w-full bg-yellow-600 text-gray-300 hover:text-gray-100 cursor-pointer'>More info...</div>
                    </div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div className='relative'>
                        <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-blue-500 flex justify-center items-center size-20 text-5xl rounded-full p-1 border-2'>
                            <FaWalking eople className='text-white'/>
                        </div>
                    </div>
                    <div class="bg-blue-500 shadow rounded pt-5">
                        <div className='p-4 text-white'>
                            <div className='font-semibold text-lg'>Come by Walk</div>
                            <div className='font-bold text-2xl'>10</div>
                        </div>
                        <div onClick={()=>handleDetails('all')} className='font-semibold text-xs p-1 w-full bg-blue-600 text-gray-300 hover:text-gray-100 cursor-pointer'>More info...</div>
                    </div>
                </div>
                {type && <div className='mt-2 text-lg w-full px-4'>
                <Student type={type}/>
            </div>} 
            </div>
                   
        </div>
    )
}

export default Dashboard
