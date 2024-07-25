import React, { useState } from 'react'
import AddDrivers from './AddDrivers';

const SentBus = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      document.body.style.overflow = isOpen ? 'auto' : 'hidden'; // Disable background scroll
    };

    const initialData = [
        { id: 1, Name: "John Doe school", licenseNumber : "ASG3567", phone: "91+ 923-456-7890", email : 'abc123xyz@GiMailShirt.com', status : 0 },
        { id: 2, Name: "Jane Smith school", licenseNumber : "ASG3567", phone: "91+ 998-765-4321", email : 'abc123xyz@GiMailShirt.com', status : 1 },
        { id: 3, Name: "Alice Johnson school", licenseNumber : "ASG3567m", phone: "91+ 956-789-0123", email : 'abc123xyz@GiMailShirt.com', status : 1 },
        // Add more data as needed
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState(initialData);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const filteredData = initialData.filter((item) =>
            item.Name.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.licenseNumber.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.phone.includes(event.target.value)
        );
        setData(filteredData);
    };
       
    return (
        <div className=''>
            {isOpen && <AddDrivers togglePopup={togglePopup} /> 
                
            }
            <div className={`w-full`}>
                <div className="container mx-auto p-2">
                    <div className="mb-4 flex flex-row">
                        <button 
                            className='w-1/6 bg-white rounded-md shadow p-2 px-10 mr-5 hover:bg-gray-100 text-gray-800 font-semibold hover:font-bold hover:scale-105 duration-500'
                            onClick={togglePopup}
                        >Add New</button>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                            placeholder="Search here..."
                            value={searchTerm}
                            onChange={handleSearch}
                            />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className='bg-gradient-to-r from-gray-400 via-blue-200 to-gray-400'>
                                {/* <th className="py-2 px-4 border-b"></th> */}
                                <th colSpan={2} className="py-2 px-4 border-b">Driver Name</th>
                                <th className="py-2 px-4 border-b">license Number</th>
                                <th className="py-2 px-4 border-b">Phone</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Satus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : null}>
                                    <td className="py-2 px-4 border-b">{item.id}</td>
                                    <td className="py-2 px-4 border-b">{item.Name}</td>
                                    <td className="py-2 px-4 border-b">{item.licenseNumber }</td>
                                    <td className="py-2 px-4 border-b">{item.phone}</td>
                                    <td className="py-2 px-4 border-b">{item.email}</td>
                                    {item.status === 0 ? 
                                        <td className="py-2 px-4 border-b text-green-600 font-semibold cursor-pointer">Active</td> :
                                        <td className="py-2 px-4 border-b text-red-600 font-semibold cursor-pointer">Blocked</td>
                                    } 
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SentBus
