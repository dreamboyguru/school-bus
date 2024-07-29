import React from 'react'
import { FaBusAlt, FaRoute } from 'react-icons/fa'
import { FaHandsHoldingChild, FaSchoolLock } from 'react-icons/fa6'
import { TbHeartHandshake } from 'react-icons/tb'

const Dashboard = () => { 
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
        console.log('clicked');
    }
    return (
        <div className='text-2xl w-full mt-12'>
            <div class="flex flex-wrap justify-center">
                                                
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="relative">
                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-b from-blue-400 to-blue-600 flex justify-center items-center w-20 h-20 text-4xl rounded-full p-2 border- border-gray-300 shadow-lg">
                            <FaSchoolLock class="text-white" />
                        </div>
                    </div>
                    <div class="bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 shadow-lg rounded-lg pt-8">
                        <div class="p-4 text-white">
                            <div class="font-semibold text-lg">Total School</div>
                            <div class="font-bold text-2xl">100</div>
                        </div>
                        <div onClick={() => handleDetails('all')} class="font-semibold text-xs p-2 w-full bg-gradient-to-b from-blue-500 via-blue-700 to-blue-800 text-gray-300 hover:text-gray-100 cursor-pointer text-center rounded-b-lg">
                            More info...
                        </div>
                    </div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="relative">
                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-b from-gray-400 to-gray-600 flex justify-center items-center w-20 h-20 text-4xl rounded-full p-2 border- border-gray-300 shadow-lg">
                            <FaRoute class="text-white" />
                        </div>
                    </div>
                    <div class="bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 shadow-lg rounded-lg pt-8">
                        <div class="p-4 text-white">
                            <div class="font-semibold text-lg">Total Routes</div>
                            <div class="font-bold text-2xl">100</div>
                        </div>
                        <div onClick={() => handleDetails('all')} class="font-semibold text-xs p-2 w-full bg-gradient-to-b from-gray-500 via-gray-700 to-gray-800 text-gray-300 hover:text-gray-100 cursor-pointer text-center rounded-b-lg">
                            More info...
                        </div>
                    </div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="relative">
                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-b from-yellow-400 to-yellow-600 flex justify-center items-center w-20 h-20 text-4xl rounded-full p-2 border- border-gray-300 shadow-lg">
                            <FaBusAlt class="text-white" />
                        </div>
                    </div>
                    <div class="bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-800 shadow-lg rounded-lg pt-8">
                        <div class="p-4 text-white">
                            <div class="font-semibold text-lg">Total Bus</div>
                            <div class="font-bold text-2xl">100</div>
                        </div>
                        <div onClick={() => handleDetails('all')} class="font-semibold text-xs p-2 w-full bg-gradient-to-b from-yellow-500 via-yellow-700 to-yellow-800 text-gray-300 hover:text-gray-100 cursor-pointer text-center rounded-b-lg">
                            More info...
                        </div>
                    </div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="relative">
                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-b from-green-400 to-green-600 flex justify-center items-center w-20 h-20 text-4xl rounded-full p-2 border- border-gray-300 shadow-lg">
                            <TbHeartHandshake class="text-white" />
                        </div>
                    </div>
                    <div class="bg-gradient-to-b from-green-400 via-green-600 to-green-800 shadow-lg rounded-lg pt-8">
                        <div class="p-4 text-white">
                            <div class="font-semibold text-lg">Total Drivers</div>
                            <div class="font-bold text-2xl">100</div>
                        </div>
                        <div onClick={() => handleDetails('all')} class="font-semibold text-xs p-2 w-full bg-gradient-to-b from-green-500 via-green-700 to-green-800 text-gray-300 hover:text-gray-100 cursor-pointer text-center rounded-b-lg">
                            More info...
                        </div>
                    </div>
                </div>

                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="relative">
                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-b from-purple-400 to-purple-600 flex justify-center items-center w-20 h-20 text-4xl rounded-full p-2 border- border-gray-300 shadow-lg">
                            <FaHandsHoldingChild class="text-white" />
                        </div>
                    </div>
                    <div class="bg-gradient-to-b from-purple-400 via-purple-600 to-purple-800 shadow-lg rounded-lg pt-8">
                        <div class="p-4 text-white">
                            <div class="font-semibold text-lg">Total Attenders</div>
                            <div class="font-bold text-2xl">100</div>
                        </div>
                        <div onClick={() => handleDetails('all')} class="font-semibold text-xs p-2 w-full bg-gradient-to-b from-purple-500 via-purple-700 to-purple-800 text-gray-300 hover:text-gray-100 cursor-pointer text-center rounded-b-lg">
                            More info...
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
    )
}

export default Dashboard
