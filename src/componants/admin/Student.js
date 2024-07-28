import React, { useState } from 'react'
import AddStudent from './AddStudent';

const Student = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      document.body.style.overflow = isOpen ? 'auto' : 'hidden'; // Disable background scroll
    };

    const initialData = [
        { id: 1, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
        { id: 2, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
        { id: 3, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
        // Add more data as needed
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState(initialData);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const filteredData = initialData.filter((item) =>
            item.StudentName.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.LastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.RollNumber.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.FatherName.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.MotherName.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.Destination.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.Point.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.Email.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.PhoneNumber.includes(event.target.value)
        );
        setData(filteredData);
    };

    console.log(data);
       
    return (
        <div className=''>
            {isOpen && <AddStudent togglePopup={togglePopup} /> 
                
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
                            placeholder="Search here ..."
                            value={searchTerm}
                            onChange={handleSearch}
                            />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className='bg-gradient-to-r from-gray-400 via-blue-200 to-gray-400 text-left'>
                                {/* <th className="py-2 px-4 border-b"></th> */}
                                <th colSpan={2} className="py-2 px-4 border-b">Student Details</th>
                                <th className="py-2 px-4 border-b">Parent Details</th>
                                <th className="py-2 px-4 border-b">Pikup / Drop Point</th>
                                {/* <th className="py-2 px-4 border-b">Email</th> */}
                                <th className="py-2 px-4 border-b">Satus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                <tr key={item.id} className='text-left'>
                                    <td className="py-2 px-4 border-b">{item.id}</td>
                                    <td className="py-2 px-4 border-b">
                                        <p><span className='font-semibold'>Name : </span>{item.StudentName} {item.LastName}</p>
                                        <p><span className='font-semibold'>Rool no : </span>{item.StudentName} {item.RollNumber}</p>
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <p><span className='font-semibold'>Father Name : </span>{item.FatherName}</p>
                                        <p><span className='font-semibold'>Mother Name : </span>{item.MotherName}</p>
                                        <p><span className='font-semibold'>Phone : </span>{item.PhoneNumber}</p>
                                        <p><span className='font-semibold'>Email : </span>{item.Email}</p>
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <p><span className='font-semibold'>Destination : </span>{item.Destination}</p>
                                        <p><span className='font-semibold'>Point : </span>{item.Point}</p>
                                    </td>
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

export default Student
