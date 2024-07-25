import React from 'react'

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
    return (
        <div className='text-2xl w-full mt-2'>
            <div class="flex flex-wrap justify-center">
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="bg-white p-4 shadow rounded">Box 1</div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="bg-white p-4 shadow rounded">Box 2</div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="bg-white p-4 shadow rounded">Box 3</div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="bg-white p-4 shadow rounded">Box 4</div>
                </div>
                <div class="w-64 max-md:w-48 max-sm:w-full p-2">
                    <div class="bg-white p-4 shadow rounded">Box 5</div>
                </div>
            </div>
        
        </div>
    )
}

export default Dashboard
