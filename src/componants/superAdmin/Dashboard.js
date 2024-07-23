import React, { useEffect, useState } from 'react'
import { MdOutlineDownloadDone } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
// import axios from 'axios';

const Dashboard = () => { 
    const [count, setCount] = useState('')
    const url = process.env.REACT_APP_API_URL;
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
    return (
        <div className='min-h-96 text-2xl w-full'>
            <div class="flex flex-wrap ml-20">
                <div class="w-1/5 p-2">
                    <div class="bg-white p-4 shadow rounded">Box 1</div>
                </div>
                <div class="w-1/5 p-2">
                    <div class="bg-white p-4 shadow rounded">Box 2</div>
                </div>
                <div class="w-1/5 p-2">
                    <div class="bg-white p-4 shadow rounded">Box 3</div>
                </div>
                <div class="w-1/5 p-2">
                    <div class="bg-white p-4 shadow rounded">Box 4</div>
                </div>
                <div class="w-1/5 p-2">
                    <div class="bg-white p-4 shadow rounded">Box 5</div>
                </div>
            </div>
        
        </div>
    )
}

export default Dashboard
