import React, { useEffect, useState } from 'react'
import AddStudent from './AddStudent';
import Pagination from '../Pagination';


const initialData = [
    { id: 1, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 2, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 3, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 4, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 5, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 6, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 7, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 8, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 9, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 10, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 11, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 12, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 13, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 14, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 15, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 16, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 17, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 18, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 19, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 20, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 21, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 22, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 23, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 24, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 25, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 26, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 27, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 28, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 29, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 30, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 31, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    { id: 32, StudentName: "John", LastName: "Doe", RollNumber: "123", FatherName: "abc", MotherName: "AAA",  PhoneNumber: "91+ 923-456-7890", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "ddd", status : 0 },
    { id: 33, StudentName: "Jane", LastName: "Smith", RollNumber: "34", FatherName: "jane", MotherName: "bbb", PhoneNumber: "91+ 998-765-4321", Email : 'abc123xyz@GiMailShirt.com', Destination: "sad", Point: "aaa", status : 0 },
    { id: 34, StudentName: "Alice", LastName: "Johnson", RollNumber: "543", FatherName: "alicu", MotherName: "CCC", PhoneNumber: "91+ 956-789-0123", Email : 'abc123xyz@GiMailShirt.com', Destination: "houston", Point: "aaa", status : 1 },
    // Add more data as needed
];


const Student = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  // Toggle popup and manage background scroll
  const togglePopup = () => {
    setIsOpen(prevIsOpen => {
      const newIsOpen = !prevIsOpen;
      document.body.style.overflow = newIsOpen ? 'hidden' : 'auto';
      return newIsOpen;
    });
  };
  

  // Filter data based on search term
  useEffect(() => {
    const filteredData = initialData.filter((item) =>
      item.StudentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.LastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.StudentName + ' ' + item.LastName).toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.RollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.FatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.MotherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Point.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.PhoneNumber.includes(searchTerm)
    );
    setData(filteredData);
  }, [searchTerm]);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Calculate indices for pagination
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = data.slice(indexOfFirstStudent, indexOfLastStudent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


       
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
                                {currentStudents.map((item, index) => (
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
                        </table><Pagination
                                studentsPerPage={studentsPerPage}
                                totalStudents={data.length}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                    </div>
                </div>
            </div>
        </div>
        
    )
}





export default Student
